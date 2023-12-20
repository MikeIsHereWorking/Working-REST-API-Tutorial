import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from 'config'

export async function createSessionHandler(req: Request, res: Response) {

    // validate user 
    const user = await validatePassword(req.body)

    // no valid user 
    if (!user) return res.status(401).send("Invalid User or Password");
    // create session
    const session = await createSession(user._id, req.get("user-agent") || "");

    // create an access token
    const accessToken = signJwt(
        {
            ...user,
            session: session._id
        },
        { expiresIn: config.get<string>('accessTokenTtl') }
    )

    // create a refresh token 
    const refreshToken = signJwt(
        {
            ...user,
            session: session._id
        },
        { expiresIn: config.get<string>('refreshTokenTtl') }
    )


    // return access & refresh token
    return res.send({ accessToken, refreshToken })
}
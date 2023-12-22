import { get } from "lodash"
import { verifyJwt } from '../utils/jwt.utils'
import { Request, Response, NextFunction } from "express"
const deserializeUser = (req: Request, resp: Response, next: NextFunction) => {
    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );

    if (!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);
    if (decoded) {
        resp.locals.user = decoded
    }

    return next();
}

export default deserializeUser;
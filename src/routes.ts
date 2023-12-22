import { Express, Request, Response, NextFunction } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'
import { createUserSchema } from "./schema/user.schema";
import { logStep } from './utils/logger'
import { createSessionHandler, deleteSessionHandler, getUserSessionHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post("/api/users",
        logStep('Validating User'),
        validateResource(createUserSchema),
        logStep('Creating User'),
        createUserHandler);

    app.post("/api/sessions",
        logStep('Validating Session'),
        validateResource(createSessionSchema),
        logStep('Creating Session'),
        createSessionHandler);


    app.get("/api/sessions",
        logStep('Requiring User'),
        requireUser,
        logStep('Getting  Session'),
        getUserSessionHandler);

    app.delete("/api/sessions",
        logStep('Requiring User'),
        requireUser,
        logStep('Deleting  Session'),
        deleteSessionHandler);


}

export default routes;
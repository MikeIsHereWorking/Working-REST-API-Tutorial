import { Express, Request, Response, NextFunction } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'
import { createUserSchema } from "./schema/user.schema";
import logger from './utils/logger'
import { createSessionHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post("/api/users",
        (req: Request, res: Response, next: NextFunction) => { logger.info('Validating User'); next() },
        validateResource(createUserSchema),
        (req: Request, res: Response, next: NextFunction) => { logger.info('Creating User'); next() },
        createUserHandler);

    app.post("/api/sessions",
        (req: Request, res: Response, next: NextFunction) => { logger.info('Validating Session'); next() },
        validateResource(createSessionSchema),
        (req: Request, res: Response, next: NextFunction) => { logger.info('Creating Session'); next() },
        createSessionHandler);


}

export default routes;
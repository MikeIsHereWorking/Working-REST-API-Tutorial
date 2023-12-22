import logger from "pino";
import dayjs from "dayjs";
import { Request, Response, NextFunction } from "express";

const log = logger({
    transport: {
        target: "pino-pretty",
        options: {
            levelFirst: true,
            translateTime: true,
            colorize: true,
        },
    },
    base: {
        pid: false
    },
    timestamp: () => `, "time":"${dayjs().format()}"`
});

export default log;

export const logStep = (message: string) => (req: Request, res: Response, next: NextFunction) => {
    log.info(message);
    next();
}

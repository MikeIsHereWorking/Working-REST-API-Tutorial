import mongoose from "mongoose";
import config from 'config';
import { error } from "console";
import logger from './logger'

function connect() {
    const dbUri = config.get<string>('dbUri');
    return mongoose.connect(dbUri).then(() => {
        logger.info('DB Connected');
    }).catch((error) => {
        logger.error(`Could not connect to db ${error}`);
        process.exit(1);
    });

}

export default connect;
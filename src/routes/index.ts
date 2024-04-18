import { Application } from 'express';
import dotenv from 'dotenv';

import usuario from './usuario';

dotenv.config();

export default (app: Application) => {
    app.use('/api', usuario);
};
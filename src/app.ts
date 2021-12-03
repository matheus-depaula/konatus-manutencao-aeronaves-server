import './database';
import 'dotenv/config';
import express from 'express';

import { userRouter } from './routes/user.routes';
import { commonRouter } from './routes/common.routes';
import { maintenanceRouter } from './routes/maintenance.routes';

const app = express();

app.use(express.json());

app.use(commonRouter);
app.use(userRouter);
app.use(maintenanceRouter);

export { app };

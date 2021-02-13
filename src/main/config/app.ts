import 'reflect-metadata';
import express from 'express';
import configRoutes from './routes';

const app = express();
app.use(express.json());
configRoutes(app);
export default app;

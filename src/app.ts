import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './modules/student/student.routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello Bangladesh!');
};
app.get('/', getAController);

export default app;

import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from "./api/tasks" // tasksRouter is an alias for 'router' export
import './db';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
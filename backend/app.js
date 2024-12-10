import express from 'express';
import cors from 'cors';
import path from 'path';
import { existsSync } from 'node:fs';


const app = express();
app.use(cors());
app.use(express.json());
const clientPath = path.resolve('../client/dist');
if (existsSync(clientPath)) {
    app.use(express.static(clientPath));
}
import userRouter from './routes/user.js';
app.use('/api/user', userRouter);

import surveyRouter from './routes/survey.js';
app.use('/api/survey', surveyRouter);

import responseRouter from './routes/response.js';
app.use('/api/response', responseRouter);

import questionRouter from './routes/question.js'; 
app.use('/api/question', questionRouter);

import assignmentRouter from './routes/assignment.js';
app.use('/api/assignment', assignmentRouter);

app.listen(process.env.PORT || 3000)

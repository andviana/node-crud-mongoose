import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import { connectDB } from './connection.js';
import mongoose from 'mongoose';

//conectar ao MongoDB pelo Mongoose
connectDB();

const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(3000, () => console.log('API Started on port 3000...'));

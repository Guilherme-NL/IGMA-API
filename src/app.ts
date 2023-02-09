import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import userRouter from "./routes/userRouter.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();

const app = express();

app.use(cors(), express.json(), userRouter, errorHandlerMiddleware);

export default app;

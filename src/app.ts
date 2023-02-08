import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();

app.use(cors(), express.json(), userRouter);

export default app;

import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";
import {
  registerUser,
  getUsersByCPF,
  getUsersByPage,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post(
  "/register",
  validateSchemaMiddleware(userSchema),
  registerUser
);
userRouter.get("/user/:CPF", getUsersByCPF);
userRouter.get("/user", getUsersByPage);

export default userRouter;

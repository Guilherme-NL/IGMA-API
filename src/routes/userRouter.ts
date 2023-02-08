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
userRouter.get("/user/cpf", getUsersByCPF);
userRouter.get("/user/page", getUsersByPage);

export default userRouter;

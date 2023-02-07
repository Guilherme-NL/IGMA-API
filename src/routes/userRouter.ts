import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import userSchema from "../schemas/userSchema";
import {
  registerUser,
  getUsersByCPF,
  getUsersByPage,
} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/login", validateSchemaMiddleware(userSchema), registerUser);
userRouter.get("/user/cpf", getUsersByCPF);
userRouter.get("/user/page", getUsersByPage);

export default userRouter;

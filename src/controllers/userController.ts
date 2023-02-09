import { Request, Response } from "express";
import {
  registerNewUser,
  getUserServiceByCPF,
  getUserService,
} from "../services/userService.js";

export async function registerUser(req: Request, res: Response) {
  const { name, CPF, birthday } = req.body;

  await registerNewUser(name, CPF, birthday);
  res.sendStatus(201);
}

export async function getUsersByCPF(req: Request, res: Response) {
  const { CPF } = req.params;

  const user = await getUserServiceByCPF(CPF);
  res.status(200).send(user);
}

export async function getUsersByPage(req: Request, res: Response) {
  const { take, skip } = req.query;

  const users = await getUserService(take as string, skip as string);
  res.status(200).send(users);
}

import { Request, Response } from "express";
import {
  registerNewUser,
  getUserServiceByCPF,
  getUserService,
} from "../services/userService.js";

export async function registerUser(req: Request, res: Response) {
  const { name, CPF, birthday } = req.body;
  console.log(req.body);

  try {
    await registerNewUser(name, CPF, birthday);
    res.sendStatus(201);
  } catch (err) {
    if (err.code) {
      res.status(err.code).send(err.message);
    }
  }
}

export async function getUsersByCPF(req: Request, res: Response) {
  const { CPF } = req.body;

  await getUserServiceByCPF(CPF);
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(422);
  }
}

export async function getUsersByPage(req: Request, res: Response) {
  const { page } = req.body;
  await getUserService(page);
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(422);
  }
}

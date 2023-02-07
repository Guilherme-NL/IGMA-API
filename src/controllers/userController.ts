import { Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {
  const { name, CPF, birthday } = req.body;
  console.log(req.body);

  try {
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(422);
  }
}

export async function getUsersByCPF(req: Request, res: Response) {
  const { CPF } = req.body;
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(422);
  }
}

export async function getUsersByPage(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(422);
  }
}

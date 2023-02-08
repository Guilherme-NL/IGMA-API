import {
  insertNewUser,
  findUserByCPF,
  findUsers,
} from "../repositories/userRepositorie.js";
import CPFValidation from "../schemas/CPFSchema.js";

async function registerNewUser(name: string, CPF: string, birthday: string) {
  const CPFOnlyNumber = CPF.replace(/-|\./g, "");
  CPFValidation(CPFOnlyNumber);
  await CPFValidationInDataBase(CPFOnlyNumber);
  await insertNewUser(name, CPFOnlyNumber, birthday);
}

async function getUserServiceByCPF(CPF: string) {
  await findUserByCPF(CPF);
}

async function getUserService(page: number) {
  await findUsers(page);
}

async function CPFValidationInDataBase(CPFOnlyNumber: string) {
  const user = await findUserByCPF(CPFOnlyNumber);
  if (user) {
    throw {
      code: 409,
      message: "There is already a customer registered with this CPF!",
    };
  }
}

export { registerNewUser, getUserServiceByCPF, getUserService };

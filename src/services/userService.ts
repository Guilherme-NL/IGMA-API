import {
  insertNewUser,
  findUserByCPF,
  findUsers,
} from "../repositories/userRepositorie.js";
import CPFValidation from "../schemas/CPFSchema.js";

async function registerNewUser(name: string, CPF: string, birthday: string) {
  const CPFOnlyNumber = standardizeCPF(CPF);
  CPFValidation(CPFOnlyNumber);
  await CPFValidationInDataBase(CPFOnlyNumber);
  await insertNewUser(name, CPFOnlyNumber, birthday);
}

async function getUserServiceByCPF(CPF: string) {
  const CPFOnlyNumber = standardizeCPF(CPF);

  const user = await findUserByCPF(CPFOnlyNumber);
  if (!user) {
    throw {
      code: 404,
      message: "There are no registered customers with the informed CPF!",
    };
  } else {
    return user;
  }
}

async function getUserService(page: number) {
  await findUsers(page);
}

function standardizeCPF(CPF: string) {
  return CPF.replace(/-|\./g, "");
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

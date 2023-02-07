import {
  insertNewUser,
  findUserByCPF,
  findUsers,
} from "../repositories/userRepositorie";

async function registerNewUser(name: string, CPF: string, birthday: string) {
  await insertNewUser(name, CPF, birthday);
}

async function getUserServiceByCPF(CPF: string) {
  await findUserByCPF(CPF);
}

async function getUserService(page: number) {
  await findUsers(page);
}

export { registerNewUser, getUserServiceByCPF, getUserService };

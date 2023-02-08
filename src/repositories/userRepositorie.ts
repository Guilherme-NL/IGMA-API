import client from "../database/postgres.js";

async function insertNewUser(name: string, CPF: string, birthday: string) {
  await client.users.create({ data: { name, CPF, birthday } });
}

async function findUserByCPF(CPF: string) {
  const user = await client.users.findFirst({ where: { CPF } });
  console.log(user);
  return user;
}

async function findUsers(page: number) {
  await client.users.findMany();
}

export { insertNewUser, findUserByCPF, findUsers };

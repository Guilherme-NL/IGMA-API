import client from "../database/postgres.js";

async function insertNewUser(name: string, CPF: string, birthday: string) {
  await client.users.create({ data: { name, CPF, birthday } });
}

async function findUserByCPF(CPF: string) {
  return await client.users.findFirst({ where: { CPF } });
}

async function findUsers(take?: string, skip?: string) {
  if (!take || !skip) {
    return client.users.findMany();
  }

  return client.users.findMany({
    take: Number(take),
    skip: Number(skip),
  });
}

export { insertNewUser, findUserByCPF, findUsers };

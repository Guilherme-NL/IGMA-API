import client from "../src/database/postgres";
import app from "../src/app";
import supertest from "supertest";

describe("/register POST", () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "Users";`;
  });

  it("Add new user with valid CPF", async () => {
    const body = {
      name: "João",
      CPF: "785.109.200-01",
      birthday: "10/10/1994",
    };
    const { status } = await supertest(app).post("/register").send(body);

    expect(status).toEqual(201);
  });

  it("Try to add new user with invalid CPF (first digit)", async () => {
    const body = {
      name: "João",
      CPF: "785.109.200-11",
      birthday: "10/10/1994",
    };
    const { status } = await supertest(app).post("/register").send(body);

    expect(status).toEqual(422);
  });

  it("Try to add new user with invalid CPF (second digit)", async () => {
    const body = {
      name: "João",
      CPF: "785.109.200-02",
      birthday: "10/10/1994",
    };
    const { status } = await supertest(app).post("/register").send(body);

    expect(status).toEqual(422);
  });

  it("Try to add new user with a CPF already registered", async () => {
    const body = {
      name: "João",
      CPF: "785.109.200-01",
      birthday: "10/10/1994",
    };
    await supertest(app).post("/register").send(body);
    const { status } = await supertest(app).post("/register").send(body);

    expect(status).toEqual(409);
  });

  afterAll(async () => {
    await client.$disconnect();
  });
});

describe("/user/:CPF GET", () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "Users";`;
  });

  it("Get user By CPF", async () => {
    const body = {
      name: "João",
      CPF: "785.109.200-01",
      birthday: "10/10/1994",
    };
    await supertest(app).post("/register").send(body);
    const result = await supertest(app).get(`/user/${body.CPF}`);
    const status = result.status;

    expect(status).toEqual(200);
  });

  it("try get user By CPF, but with an unregistered CPF", async () => {
    const CPF = "785.109.200-01";

    const result = await supertest(app).get(`/user/${CPF}`);
    const status = result.status;

    expect(status).toEqual(404);
  });

  afterAll(async () => {
    await client.$disconnect();
  });
});

describe("/user GET", () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "Users";`;
  });

  it("Get all users with pagination", async () => {
    const body1 = {
      name: "João",
      CPF: "785.109.200-01",
      birthday: "10/10/1994",
    };
    const body2 = {
      name: "Guilherme",
      CPF: "223.031.710-59",
      birthday: "10/10/1994",
    };
    const body3 = {
      name: "Pedro",
      CPF: "467.701.850-24",
      birthday: "10/10/1994",
    };
    const body4 = {
      name: "Rafael",
      CPF: "417.083.260-49",
      birthday: "10/10/1994",
    };
    await supertest(app).post("/register").send(body1);
    await supertest(app).post("/register").send(body2);
    await supertest(app).post("/register").send(body3);
    await supertest(app).post("/register").send(body4);
    const result = await supertest(app)
      .get(`/user`)
      .query({ take: "2", skip: "0" });
    const status = result.status;

    expect(status).toEqual(200);
    expect(result.body.length).toEqual(2);
  });

  afterAll(async () => {
    await client.$disconnect();
  });
});

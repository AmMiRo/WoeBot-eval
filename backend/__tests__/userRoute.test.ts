import request from "supertest";
import express, { Express } from "express";
import userRoute from "../src/api/routes/users";
import userQueries from "../src/api/queries/users";

const server: Express = express();
server.use(express.json());
server.use(userRoute);

describe("POST /users", () => {
  const fakeDb = {
    id: "00000000-0000-0000-0000-000000000000",
  };

  test("Responds with 201 if successful", async () => {
    userQueries.createUser = jest.fn(() => {
      return new Promise((res) => setTimeout(() => res(fakeDb), 0));
    });

    const body = {
      username: "username",
      password: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    const response = await request(server).post("/").send(body);

    const expectedReponse = fakeDb;

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expectedReponse);
    expect(userQueries.createUser).toHaveBeenCalledTimes(1);
  });

  test("Responds with 500 if unsuccessful", async () => {
    userQueries.createUser = jest.fn(() => {
      throw { detail: "error" };
    });

    const body = {
      username: "username",
      password: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    const response = await request(server).post("/").send(body);

    const expectedReponse = {
      error: {
        detail: "error",
      },
      message: "Something went wront when creating this user.",
    };

    expect(response.status).toBe(500);
    expect(response.body).toEqual(expectedReponse);
    expect(userQueries.createUser).toHaveBeenCalledTimes(1);
  });

  test("Responds with 500 if unsuccessful", async () => {
    userQueries.createUser = jest.fn(() => {
      return new Promise((res) => setTimeout(() => res(fakeDb), 0));
    });

    const body = {
      username: "u",
      password: "Testpass",
      email: "not an email",
      phone: "not a phone",
    };

    const response = await request(server).post("/").send(body);

    const expectedReponse = {
      message: "Please include valid user info.",
    };

    expect(response.status).toBe(400);
    expect(response.body).toEqual(expectedReponse);
    expect(userQueries.createUser).toHaveBeenCalledTimes(0);
  });
});

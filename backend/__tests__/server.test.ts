import request from "supertest";
import server from "../src/server";

describe("Test server.ts", () => {
  test("catch-all route", async () => {
    const res = await request(server).get("/");

    expect(res.body).toEqual({ message: "Server is up!!!" });
  });
});

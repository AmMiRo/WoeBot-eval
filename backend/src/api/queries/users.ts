import db from "../../db/dbConfig";
import { CreateUserPayload } from "../types/users";

async function createUser(user: CreateUserPayload) {
  const id = await db("users").insert(user).returning("id");
  return id[0];
}

const usersQueries = {
  createUser,
};

export default usersQueries;

import knex from "knex";
import knexConfig from "../../knexfile";
// const knexConfig = require("../../knexfile.ts");

const environment = process.env.DB_ENV || "development";

export default knex(knexConfig[environment]);

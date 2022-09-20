import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").notNullable().primary();
    table.string("username").unique().notNullable();
    table.string("password").unique().notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").unique().notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}

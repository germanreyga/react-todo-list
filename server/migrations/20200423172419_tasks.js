exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("description", 255).notNullable();
    table.string("status", 255).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};

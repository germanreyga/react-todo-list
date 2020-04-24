const knex = require("../database/connection");

exports.findAll = () => {
  return knex.select("*").from("tasks");
};

exports.create = (description) => {
  return knex.from("tasks").insert({
    description: description,
    status: "pending",
  });
};

exports.delete = (id) => {
  return knex.from("tasks").where("id", id).del();
};

exports.changeStatus = (id) => {
  return knex.from("tasks").where("id", id).update({
    status: "completed",
  });
};

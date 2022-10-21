const Knex = require("knex");

const mysqlConnectionString = {
  host: "127.0.0.1",
  user: "root", // Has all privileges on local DB
  password: "root@2017", //
  database: "YOUR-DATABASE",
  port: 3306,
};

const KNEX_CONFIG = {
  client: "mysql",
  connection: mysqlConnectionString,
};

const knex = Knex(KNEX_CONFIG);
const data = {
  knex: knex,
};
module.exports = data;
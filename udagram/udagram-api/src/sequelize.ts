import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   // username: config.username,
//   // password: config.password,
//   // database: config.database,
//   // host: config.host,
//   // port: config.postgres_port,

//   // dialect: "postgres",
//   // storage: ":memory:",
// });
export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.password}@${config.host}:${config.postgres_port}/postgres`
);

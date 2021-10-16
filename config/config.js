require("dotenv").config();
module.exports = {
  development: {
    username: process.env.RUANGGURU_MYSQL_USERNAME,
    password: process.env.RUANGGURU_MYSQL_PASSWORD,
    database: process.env.RUANGGURU_MYSQL_DATABASE,
    host: process.env.RUANGGURU_MYSQL_HOST,
    dialect: "mysql",
    logging: true,
    dialectOptions: {
      connectTimeout: 60000,
    },
    timezone: "Asia/Bangkok",
  },
  test: {
    username: process.env.RUANGGURU_MYSQL_USERNAME,
    password: process.env.RUANGGURU_MYSQL_PASSWORD,
    database: process.env.RUANGGURU_MYSQL_DATABASE,
    host: process.env.RUANGGURU_MYSQL_HOST,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      connectTimeout: 60000,
    },
    timezone: "Asia/Bangkok",
  },
  production: {
    username: process.env.RUANGGURU_MYSQL_USERNAME,
    password: process.env.RUANGGURU_MYSQL_PASSWORD,
    database: process.env.RUANGGURU_MYSQL_DATABASE,
    host: process.env.RUANGGURU_MYSQL_HOST,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      connectTimeout: 60000,
    },
    timezone: "Asia/Bangkok",
  },
};

"use strict";
import dotenv from 'dotenv';
dotenv.config()
import 'yup-phone'
import bodyParser from 'body-parser';
import cros from 'cors';
import express from 'express';
import morganBody from 'morgan-body';
import routing from "./routing";
import { handleErrorGlobal, handleSendError } from "./middleware";

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cros());
morganBody(app, { prettify: false })

app.use(routing)
app.use(handleSendError);
app.use(handleErrorGlobal);

const NODE_ENV = process.env.NODE_ENV;
const RUANGGURU_MYSQL_HOST = process.env.RUANGGURU_MYSQL_HOST;
const RUANGGURU_MYSQL_DATABASE = process.env.RUANGGURU_MYSQL_DATABASE;
const RUANGGURU_MYSQL_USERNAME = process.env.RUANGGURU_MYSQL_USERNAME;
const RUANGGURU_MYSQL_PASSWORD = process.env.RUANGGURU_MYSQL_PASSWORD;
const TOKEN = process.env.TOKEN;

console.log('PORT ', port);
console.log('NODE_ENV ', NODE_ENV);
console.log('RUANGGURU_MYSQL_HOST ', RUANGGURU_MYSQL_HOST);
console.log('RUANGGURU_MYSQL_DATABASE ', RUANGGURU_MYSQL_DATABASE);
console.log('RUANGGURU_MYSQL_USERNAME ', RUANGGURU_MYSQL_USERNAME);
console.log('RUANGGURU_MYSQL_PASSWORD ', RUANGGURU_MYSQL_PASSWORD);
console.log('TOKEN ', TOKEN);

app.listen(port, () => {
    console.log("V Server node running on PORT " + port);
});

export default app
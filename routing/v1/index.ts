import express from "express";
import loginRouting from "./login";

const app = express.Router();

app.use("/login", loginRouting);

export default app;
import express from "express";
import loginRouting from "./login";
import registerRouting from "./register";

const app = express.Router();

app.use("/login", loginRouting);
app.use("/register", registerRouting);

export default app;
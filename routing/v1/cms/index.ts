import express from "express";
import loginRouting from "./login";
import registerRouting from "./register";
import prizeRouting from "./prize";

const app = express.Router();

app.use("/login", loginRouting);
app.use("/register", registerRouting);
app.use("/prize", prizeRouting);

export default app;
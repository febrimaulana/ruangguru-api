import express from "express";
import cmsRouting from "./cms";
import loginRouting from "./login";

const app = express.Router();

app.use("/cms", cmsRouting);
app.use("/login", loginRouting);

export default app;
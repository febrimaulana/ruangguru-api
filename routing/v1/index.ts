import express from "express";
import cmsRouting from "./cms";
import loginRouting from "./login";
import prizeRouting from "./prize";

const app = express.Router();

app.use("/cms", cmsRouting);
app.use("/login", loginRouting);
app.use("/prize", prizeRouting);

export default app;
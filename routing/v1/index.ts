import express from "express";
import cmsRouting from "./cms";

const app = express.Router();

app.use("/cms", cmsRouting);

export default app;
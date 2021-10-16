import express from "express";
import { LoginV1 } from "../../controller";
import { LoginYupV1 } from "../../middleware";
const app = express.Router();

app.post("/email-password", LoginYupV1.emailPassword, LoginV1.loginEmailPassword)

export default app;
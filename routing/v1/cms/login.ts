import express from "express";
import { LoginV1 } from "../../../controller-cms";
import { AuthorizationBasic, LoginYupV1 } from "../../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/email-password", LoginYupV1.emailPassword, LoginV1.loginEmailPassword)

export default app;
import express from "express";
import { LoginV1 } from "../../../controller-cms";
import { AuthorizationBasic, LoginYupCMSV1 } from "../../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/email-password", LoginYupCMSV1.emailPassword, LoginV1.loginEmailPassword)

export default app;
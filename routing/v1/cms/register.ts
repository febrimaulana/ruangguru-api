import express from "express";
import { RegisterV1 } from "../../../controller-cms";
import { AuthorizationBasic, RegisterYupV1 } from "../../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/email-password", RegisterYupV1.emailPassword, RegisterV1.emailPassword)

export default app;
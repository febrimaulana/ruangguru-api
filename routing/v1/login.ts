import express from "express";
import { LoginV1 } from "../../controller";
import { AuthorizationBasic, LoginYupV1 } from "../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/phone", LoginYupV1.checkPhone, LoginV1.checkPhone)

export default app;
import express from "express";
import { LoginV1 } from "../../controller";
import { AuthorizationBasic } from "../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/phone", LoginV1.checkPhone)

export default app;
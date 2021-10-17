import express from "express";
import { PrizeV1 } from "../../controller";
import { AuthorizationBasic, PrizeYupV1 } from "../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/", PrizeYupV1.create, PrizeV1.create)

export default app;
import express from "express";
import { PrizeV1 } from "../../../controller-cms";
import { AuthorizationBasic, PrizeYupCMSV1 } from "../../../middleware";
const app = express.Router();

app.use(AuthorizationBasic);
app.post("/", PrizeYupCMSV1.klaimAction, PrizeV1.klaimAction);
app.get("/", PrizeV1.findAll);

export default app;
import express from "express";
import v1Routing from './v1';

const app = express.Router();

app.use("/ruangguru/v1", v1Routing);

export default app;
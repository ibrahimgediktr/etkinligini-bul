import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import { eventsRouter } from "./router/events";
import { categoriesRouter } from "./router/categories";

app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;

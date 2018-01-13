import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as Env from "dotenv";
import * as express from "express";
import stripeQLRouter from "./routers/stripeql";

const env = Env.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/stripeql", stripeQLRouter);

app.get("/", (req, res) => {
  res.json({
    success: "Horray!",
  });
});

export default app;

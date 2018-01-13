import {
  graphiqlExpress,
  graphqlExpress,
} from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as express from "express";
import schema from "../schemas/schema";

const stripeQLRouter = express.Router();

stripeQLRouter.use("/graphql", graphqlExpress({
  schema,
}));

stripeQLRouter.use("/graphiql", graphiqlExpress({
  endpointURL: "/",
}));

export default stripeQLRouter;

import {
  graphiqlExpress,
  graphqlExpress,
} from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as express from "express";
import schema from "../schemas/schema";

class StripeQL {
  public static getRouter(root: string) {
    if (!this.router) {
      this.router = express.Router();
      this.router.use("/", graphqlExpress({
        schema,
      }));
      this.router.get("/iql", graphiqlExpress({
        endpointURL: root + "/",
      }));
    }
    return this.router;
  }
  private static router: express.Router;
}

export default StripeQL;

import * as Env from "dotenv";
import { GraphQLServer } from "graphql-yoga";
import * as Stripe from "stripe";
const env = Env.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const typeDefs = `
  type Query {
    customer(id:String!) : Customer!
  }

  type Customer {
      id: String,
      object: String,
      account_balance: Int,
      created: Int,
      currency: String,
      default_source: String,
      delinquent: Boolean,
      description: String,
      discount: String,
      email: String,
      livemode: String,
  }
`;

async function getCustomer(root: any, { id }: { id: string }) {
  return await stripe.customers.retrieve(id);
}

const resolvers = {
  Query: {
    customer: getCustomer,
  },
};

const options = {
  port: process.env.PORT || 3000,
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at ${options.port}`);
});

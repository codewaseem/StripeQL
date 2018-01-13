import {
  addMockFunctionsToSchema,
  makeExecutableSchema,
} from "graphql-tools";

import resolvers from "../resolvers/resolvers";

const typeDefs = `
  type Customer {
    id:String
    object:String
    account_balance:Int,
    created:Int,
    currency:String,
    default_source:String,
    delinquent:Boolean,
    description:String,
    discount:String,
    email:String,
    livemode:Boolean,
    shipping:String
  }

  type Query {
    customer(id:String) : Customer
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

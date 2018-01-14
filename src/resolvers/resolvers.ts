import { stripe } from "../stripe";

async function getCustomer(root: any, { id }: any) {
  return await stripe.customers.retrieve(id);
}

async function addCustomer(root: any, { email }: any) {
  return await stripe.customers.create({ email });
}

export const resolvers = {
  Query: {
    customer: getCustomer,
  },
  // tslint:disable-next-line:object-literal-sort-keys
  Mutation: {
    addCustomer,
  },
};

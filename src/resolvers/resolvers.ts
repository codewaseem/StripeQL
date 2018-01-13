import { stripe } from "../stripe";

const getCustomer = async (root: any, { id }: any) => {
  return await stripe.customers.retrieve(id);
};

export const resolvers = {
  Query: {
    customer: getCustomer,
  },
};

import { stripe } from "../stripe";
export const resolvers = {
  Query: {
    customer: async (id: string) => {
      return await stripe.customers.retrieve(id);
    },
  },
};

import * as Env from "dotenv";
import * as Stripe from "stripe";
const env = Env.config();
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

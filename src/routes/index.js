import { plansRoutes } from "./plans.js";
import { kycRoutes } from "./kyc.js";

export async function registerRoutes(fastify) {
  // Register API routes with prefix
  await fastify.register(plansRoutes);
  await fastify.register(kycRoutes);

  fastify.log.info("Routes registered successfully");
}

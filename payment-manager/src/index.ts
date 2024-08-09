import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import fastifySwagger from "fastify-swagger";

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

// Register Swagger
fastify.register(fastifySwagger, {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "Payment Manager API",
      description: "API documentation for the Payment Manager service",
      version: "1.0.0",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
});

fastify.register(require("./routes/transactionRoutes"));

fastify.listen({ port: 3002 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});

import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.register(require("./routes/user"));
fastify.register(require("./routes/account"));
fastify.register(require("./routes/paymentHistory"));

fastify.listen(3001, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});

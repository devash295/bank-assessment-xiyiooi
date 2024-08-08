import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/register",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id, password } = request.body as any;
      const user = await prisma.user.create({ data: { id, password } });
      reply.send(user);
    }
  );

  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id, password } = request.body as any;
      const user = await prisma.user.findUnique({ where: { id } });
      if (user && user.password === password) {
        reply.send(user);
      } else {
        reply.status(401).send({ message: "Invalid credentials" });
      }
    }
  );
}

module.exports = routes;

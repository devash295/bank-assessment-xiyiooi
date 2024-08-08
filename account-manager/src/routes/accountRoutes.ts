import { FastifyInstance } from "fastify";
import { getAccounts, addAccount } from "../controllers/accountController";
import { verifyJWT } from "../middleware/verifyJWT";

async function accountRoutes(fastify: FastifyInstance) {
  fastify.get("/accounts", { preHandler: verifyJWT }, getAccounts);
  fastify.post("/accounts", { preHandler: verifyJWT }, addAccount);
}

module.exports = accountRoutes;

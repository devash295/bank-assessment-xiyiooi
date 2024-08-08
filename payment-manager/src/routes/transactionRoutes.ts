import { FastifyInstance } from "fastify";
import {
  sendTransaction,
  withdrawTransaction,
  getUserTransactions,
} from "../controllers/transactionController";
import { verifyJWT } from "../middleware/verifyJWT";

async function transactionRoutes(fastify: FastifyInstance) {
  fastify.post("/send", { preHandler: verifyJWT }, sendTransaction);
  fastify.post("/withdraw", { preHandler: verifyJWT }, withdrawTransaction);
  fastify.get("/transactions", { preHandler: verifyJWT }, getUserTransactions);
}

module.exports = transactionRoutes;

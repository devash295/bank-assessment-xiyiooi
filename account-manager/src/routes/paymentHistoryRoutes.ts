import { FastifyInstance } from "fastify";
import {
  getPaymentHistory,
  addPaymentHistory,
} from "../controllers/paymentHistoryController";
import { verifyJWT } from "../middleware/verifyJWT";

async function paymentHistoryRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/accounts/:accountId/history",
    { preHandler: verifyJWT },
    getPaymentHistory
  );
  fastify.post(
    "/accounts/:accountId/history",
    { preHandler: verifyJWT },
    addPaymentHistory
  );
}

module.exports = paymentHistoryRoutes;

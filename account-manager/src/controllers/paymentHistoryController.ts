import { FastifyRequest, FastifyReply } from "fastify";
import {
  getPaymentHistoryByAccountId,
  createPaymentHistory,
} from "../models/paymentHistoryModel";

export const getPaymentHistory = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { accountId } = request.params as any;
  const paymentHistory = await getPaymentHistoryByAccountId(accountId);
  reply.send(paymentHistory);
};

export const addPaymentHistory = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { accountId, amount } = request.body as any;
  const paymentHistory = await createPaymentHistory(accountId, amount);
  reply.send(paymentHistory);
};

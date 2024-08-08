import { FastifyRequest, FastifyReply } from "fastify";
import {
  createTransaction,
  getTransactionsByUserId,
} from "../models/transactionModel";

export const sendTransaction = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { amount, toAddress } = request.body as any;
  const transaction = await processTransaction({
    amount,
    toAddress,
    userId: request.user.id,
    type: "send",
  });
  reply.send(transaction);
};

export const withdrawTransaction = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { amount } = request.body as any;
  const transaction = await processTransaction({
    amount,
    userId: request.user.id,
    type: "withdraw",
  });
  reply.send(transaction);
};

export const getUserTransactions = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const transactions = await getTransactionsByUserId(request.user.id);
  reply.send(transactions);
};

async function processTransaction(transaction: any) {
  return new Promise((resolve, reject) => {
    console.log("Transaction processing started for:", transaction);

    // Simulate long running process
    setTimeout(async () => {
      console.log("transaction processed for:", transaction);
      const createdTransaction = await createTransaction(transaction);
      resolve(createdTransaction);
    }, 30000); // 30 seconds
  });
}

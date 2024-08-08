import { FastifyRequest, FastifyReply } from "fastify";
import { getAccountsByUserId, createAccount } from "../models/accountModel";

export const getAccounts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const accounts = await getAccountsByUserId(request.user.id);
  reply.send(accounts);
};

export const addAccount = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { type, balance } = request.body as any;
  const account = await createAccount(request.user.id, type, balance);
  reply.send(account);
};

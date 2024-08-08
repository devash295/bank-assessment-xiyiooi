import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPaymentHistoryByAccountId = async (accountId: string) => {
  return prisma.paymentHistory.findMany({ where: { accountId } });
};

export const createPaymentHistory = async (
  accountId: string,
  amount: number
) => {
  return prisma.paymentHistory.create({ data: { accountId, amount } });
};

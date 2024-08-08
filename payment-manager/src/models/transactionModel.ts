import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTransaction = async (transaction: any) => {
  return prisma.transaction.create({ data: transaction });
};

export const getTransactionsByUserId = async (userId: string) => {
  return prisma.transaction.findMany({ where: { userId } });
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAccountsByUserId = async (userId: string) => {
  return prisma.account.findMany({ where: { userId } });
};

export const createAccount = async (
  userId: string,
  type: string,
  balance: number
) => {
  return prisma.account.create({ data: { userId, type, balance } });
};

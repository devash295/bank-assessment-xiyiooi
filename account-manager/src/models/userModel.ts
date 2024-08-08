import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (id: string, email: string) => {
  return prisma.user.create({ data: { id, email } });
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

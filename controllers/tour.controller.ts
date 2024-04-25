import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTours = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const tours = await prisma.tour.findMany();

  reply.status(200).send({
    message: "status",
    data: {
      tours,
    },
  });
};

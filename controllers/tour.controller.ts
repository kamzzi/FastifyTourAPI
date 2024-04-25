import { FastifyReply, FastifyRequest } from "fastify";

export const getTours = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  reply.status(200).send({
    message: "status",
    data: [],
  });
};

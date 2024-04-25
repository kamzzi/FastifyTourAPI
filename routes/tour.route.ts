import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getTours } from "../controllers/tour.controller";

export const tourRoute = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: () => void
) => {
  fastify.get("/", getTours);
  done();
};

import Fastify from "fastify";
import { tourRoute } from "./routes/tour.route";

export const startServer = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(tourRoute, { prefix: "/api/v1/tours" });

  return fastify;
};

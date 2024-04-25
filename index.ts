import Fastify from "fastify";

export const startServer = () => {
  const fastify = Fastify({
    logger: true,
  });

  return fastify;
};

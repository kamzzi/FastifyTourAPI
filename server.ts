import { startServer } from ".";

const fastify = startServer();

const PORT = 3000;

const init = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log(`Server successfully running!`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

init();

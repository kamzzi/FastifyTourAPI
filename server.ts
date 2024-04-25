import { startServer } from ".";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

const fastify = startServer();

const PORT = Number(process.env.PORT) || 3000;

const init = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log(`Server successfully running at port ${PORT}!`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

init();

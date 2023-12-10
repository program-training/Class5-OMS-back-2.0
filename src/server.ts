import "dotenv/config";
import express from "express";
import chalk from "chalk";
import morgan from "./logger/morgan";
// import cors from "./cors/cors";
import { connectToMongoose } from "./dataAccess/mongoose";
import { connectionToPostgres } from "./dataAccess/postgreSQL";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
// import server from "./graphql/apolloServer";
import { typeDefs } from "./graphql/typeDef";
import { resolvers } from "./graphql/resolvers";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
const app = express();
const startApolloServer = async () => {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    cors({
      origin: [process.env.WHITE_LIST || "http://localhost:5173"],
      credentials: false,
    }),
    expressMiddleware(server)
  );

  app.listen(5000, () => {
    console.log(`🚀 Server ready at http://localhost:5000/graphql`);
  });
};
startApolloServer()
  .then(() => {
    connectToMongoose()
      .then((message) => {
        console.log(chalk.magentaBright(message));
      })
      .catch((error) =>
        console.log(
          chalk.redBright("Connect to mongoDB Error: ", error.message)
        )
      );
  })
  .then(() => {
    connectionToPostgres()
      .then((message) => console.log(message))
      .catch((error) => console.log(error.message));
  });

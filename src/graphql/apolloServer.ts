import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./typeDef";
import resolvers from "./resolvers";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(
  "/graphql",
  cors({
    origin: [process.env.WHITELIST || "http://localhost:5000"],
    credentials: true,
  }),
  expressMiddleware(server)
);

const corsHandler = app;

export default corsHandler;

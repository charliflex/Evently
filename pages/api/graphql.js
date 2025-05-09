import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../lib/schema';
import resolvers from '../../lib/resolvers';
import dbConnect from '../../lib/dbConnect';

import microCors from "micro-cors";

const cors = microCors({
  origin: "https://studio.apollographql.com",
  allowMethods: ["GET", "POST"],
  allowHeaders: [
    "Access-Control-Allow-Credentials",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers"
  ],
});

let apolloServer = null;

async function getApolloServer() {
  if (!apolloServer) {
    await dbConnect();

    apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      context: async () => {
        return {}; 
      },
    });

    await apolloServer.start();
  }

  return apolloServer;
}

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const server = await getApolloServer();
  const handlerFn = server.createHandler({ path: "/api/graphql" });
  return handlerFn(req, res);
});


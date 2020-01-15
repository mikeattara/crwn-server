import { ApolloServer } from "apollo-server";

import { config } from "./config/index";
import resolvers from "./resolvers";
import typeDefs from "./types";

const { apollo, port } = config;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  ...apollo
});

server.listen(port).then(({ url }) => console.log(`Server ready at ${url}. `));

// const {GraphQLServer} = require('graphql-yoga');
import { GraphQLServer } from "graphql-yoga";
// const resolvers = require('../resolvers');
import resolvers from "../resolvers";
// const {prisma} = require('../generated/prisma-client');
import {prisma} from "../generated/prisma-client"; 

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: (req) => ({ ...req, prisma }),
  });
}

export default createServer;
 
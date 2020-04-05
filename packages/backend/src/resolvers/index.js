// const todoListQuery = require("./lists/query");
import todoListQuery from "./lists/query";

// const todoListMutation = require("./lists/mutation");
import todoListMutation from "./lists/mutation";

const resolvers = {
  Mutation: {
    ...todoListMutation,
  },

  Query: {
    ...todoListQuery,
  },
};

export default resolvers;

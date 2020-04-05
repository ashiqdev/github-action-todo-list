const todoListQuery = require("./lists/query");
const todoListMutation = require("./lists/mutation");

const resolvers = {
  Mutation: {
    ...todoListMutation,
  },

  Query: {
    ...todoListQuery,
  },
};

module.exports = resolvers;

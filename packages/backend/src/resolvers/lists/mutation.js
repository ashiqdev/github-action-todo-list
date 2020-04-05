const fragment = require("./fragment");

const mutations = {
  async createTodo(parent, args, ctx) {
    const newTodo = await ctx.prisma
      .createTodoList({
        task: args.task,
        isCompleted: args.isCompleted,
      })
      .$fragment(fragment);

    return newTodo;
  },
};

module.exports = mutations;

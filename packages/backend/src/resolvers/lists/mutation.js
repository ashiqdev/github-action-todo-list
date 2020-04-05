// const fragment = require("./fragment");
import fragment from "./fragment";

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

export default mutations;

import fragment from "./fragment";
const query = {
  async todos(parent, args, ctx) {
    const todos = await ctx.prisma.todoLists().$fragment(fragment);
    return todos;
  },

  async todo(parent, args, ctx) {
    const todo = await ctx.prisma.todoList({ id: args.id }).$fragment(fragment);
    return todo;
  },
};

export default query;

// import { prisma } from "../../src/generated/prisma-client";
const { prisma } = require("../../src/generated/prisma-client");

const todo = {
  task: "Learning Rust",
};

const createTodo = async () => {
  const newTodo = await prisma.createTodoList(todo);
  return newTodo;
};

module.exports = { createTodo };

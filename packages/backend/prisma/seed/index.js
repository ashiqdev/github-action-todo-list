const { createTodo } = require("./todo");

async function seedDB() {
  await createTodo();
  return "Seed Complete";
}

seedDB().then(console.log);

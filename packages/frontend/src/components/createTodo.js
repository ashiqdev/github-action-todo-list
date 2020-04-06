import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_TODO_MUTATION } from "../../resolvers/todolist/mutation";
import { TODO_LISTS } from "../../resolvers/todolist/query";

const createTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addtodo] = useMutation(CREATE_TODO_MUTATION, {
    refetchQueries: [{ query: TODO_LISTS }],
  });

  const onNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const OnFormSubmit = (e) => {
    e.preventDefault();
    addtodo({ variables: { task: newTodo } });
    setNewTodo("");
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={OnFormSubmit}>
        <TextField
          value={newTodo}
          onChange={onNewTodoChange}
          margin="normal"
          label="NewTodo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default createTodo;

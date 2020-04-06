import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/icons/List';
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';
import { useQuery } from "@apollo/react-hooks";

import { TODO_LISTS } from "../../resolvers/todolist/query";
import { ListItemText } from "@material-ui/core";

const TodoList = () => {
  const { loading, error, data } = useQuery(TODO_LISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (

    <Paper>
      <ul>
      {data.todos.map((item) => (
        <ListItem key={item.id}>
          <ListItemText>{item.task}</ListItemText>
        </ListItem>
      ))}
      </ul>
    </Paper>
  );
};

export default TodoList;

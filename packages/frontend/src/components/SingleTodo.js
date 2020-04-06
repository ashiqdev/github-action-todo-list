import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SingleTodo = ({ task }) => {
  return (
    <ListItem style={{ height: "64px" }}>
      <ListItemText>{task}</ListItemText>
    </ListItem>
  );
};

export default SingleTodo;

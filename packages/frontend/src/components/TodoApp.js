import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import CreateTodo from "./createTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">TODOLIST APP</Typography>
        </ToolBar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <CreateTodo />
          <TodoList/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default App;

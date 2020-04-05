// const gql = require("graphql-tag");
import gql from "graphql-tag";

const fragment = gql`
  fragment TodoList on TodoList {
    id
    task
    isCompleted
  }
`;

export default fragment;

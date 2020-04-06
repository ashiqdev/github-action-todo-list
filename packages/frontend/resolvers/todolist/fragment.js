import gql from "graphql-tag";

export const TODO_FRAGMENT = gql`
  fragment TodoList on TodoList {
    id
    task
    isCompleted
  }
`;

import gql from "graphql-tag";

import { TODO_FRAGMENT } from "./fragment";

export const CREATE_TODO_MUTATION = gql`
  mutation CREATE_TODO_MUTATION($task: String!, $isCompleted: Boolean) {
    createTodo(task: $task, isCompleted: $isCompleted) {
      ...TodoList
    }
  }
  ${TODO_FRAGMENT}
`;

import gql from "graphql-tag";

import { TODO_FRAGMENT } from "./fragment";

export const TODO_LISTS = gql`
  query TODO_LISTS {
    todos {
      ...TodoList
    }
  }
  ${TODO_FRAGMENT}
`;

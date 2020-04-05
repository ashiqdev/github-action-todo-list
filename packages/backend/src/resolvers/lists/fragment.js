const gql = require("graphql-tag");

const fragment = gql`
  fragment TodoList on TodoList {
    id
    task
    isCompleted
  }
`;

module.exports = fragment;

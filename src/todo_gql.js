import { gql } from "@apollo/client";

export const TODOS_QUERY = gql`
  query {
    todos {
      id
      title
      completed
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($todoId: ID!) {
    toggleCompleted(todoId: $todoId)
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title)
  }
`;

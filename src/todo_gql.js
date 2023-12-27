import { gql } from "@apollo/client";

export const TODOS_QUERY = gql`
query {
  todos {
    id
    title
    completed
  }
}`;
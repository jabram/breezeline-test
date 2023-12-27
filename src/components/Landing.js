import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Checkbox,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { TODOS_QUERY, TOGGLE_TODO } from "../todo_gql";

export default function Landing() {
  const { loading, error, data } = useQuery(TODOS_QUERY);
  const [toggleCompleted] = useMutation(TOGGLE_TODO, {
    refetchQueries: [TODOS_QUERY],
  });

  if (loading) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {error.message}
      </Box>
    );
  } else if (data) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">TODO</Typography>
        <Paper sx={{ p: 3 }}>
          <List>
            {data.todos.map((todo) => {
              return (
                <ListItem disablePadding key={todo.id}>
                  <ListItemButton
                    onClick={() =>
                      toggleCompleted({ variables: { todoId: todo.id } })
                    }
                  >
                    <Checkbox checked={todo.completed} />
                    {todo.title}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
    );
  }
}

import { useQuery } from "@apollo/client";
import {
  Box,
  Checkbox,
  CircularProgress,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { TODOS_QUERY } from "../todo_gql";

export default function Landing() {
  const { loading, error, data } = useQuery(TODOS_QUERY);

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
                <ListItem>
                  <Checkbox />
                  {todo.title}
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
    );
  }
}

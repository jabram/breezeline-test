import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Paper, Toolbar, Typography } from "@mui/material";
import { TODOS_QUERY } from "../todo_gql";

export default function Landing() {
  const { loading, error, data } = useQuery(TODOS_QUERY);

  if (loading) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <CircularProgress/>
      </Box>
    );
  } else if (error) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {error.message}
      </Box>
    )
  } else if (data) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">TODO</Typography>
        <Paper sx={{p: 3}}>
          <ul>
            {data.todos.map(todo => {
              return <li>{todo.title}</li>;
            })}
          </ul>
        </Paper>
      </Box>
    );
  }
}
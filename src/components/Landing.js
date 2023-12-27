import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ADD_TODO, TODOS_QUERY, TOGGLE_TODO } from "../todo_gql";

export default function Landing() {
  const [newTodo, setNewTodo] = useState("");
  const { loading, error, data } = useQuery(TODOS_QUERY);
  const [toggleCompleted] = useMutation(TOGGLE_TODO, {
    refetchQueries: [TODOS_QUERY],
  });
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [TODOS_QUERY],
  });

  const handleAddTodo = () => {
    addTodo({ variables: { title: newTodo } });
    setNewTodo("");
  };

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
                    <ListItemText
                      sx={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.title}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Grid container>
            <TextField
              label="New Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </Grid>
        </Paper>
      </Box>
    );
  }
}

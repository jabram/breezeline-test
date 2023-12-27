import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#46bbcb",
    },
    secondary: {
      main: "#0057b8",
    },
  },
});

let csrf_token;

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-csrf-token": csrf_token,
    },
  });
  return forward(operation).map((response) => {
    const possible_csrf_token = operation
      .getContext()
      .response.headers.get("x-csrf-token");
    if (possible_csrf_token) {
      csrf_token = possible_csrf_token;
    }
    return response;
  });
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  // credentials: 'same-origin',
  credentials: "include",
});

const errhandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      return console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      );
    });
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authLink, concat(errhandler, httpLink)),
});

export default function Layout(props) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              alignItems: "left",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <svg
                data-v-e3291796=""
                aria-labelledby="logotitle"
                role="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 338.6 72"
                className="max-h-16 mx-auto"
              >
                <path
                  data-v-e3291796=""
                  d="M325.08,52.86c-1.19,4.25-5.1,7.82-11.33,7.82-6.78,0-12.82-4.85-12.82-13.12,0-7.91,5.89-13,12.28-13,7.62,0,12.31,4.7,12.31,12.62a16.33,16.33,0,0,1-.14,2.32H308.26a5.3,5.3,0,0,0,5.59,4.75c2.72,0,4.25-1.28,4.95-3.21Zm-6.83-8.17c-.1-1.88-1.38-4.15-4.95-4.15a4.66,4.66,0,0,0-4.89,4.15Zm-37,1.14a4,4,0,0,1,.22-1.64,4,4,0,0,1,3.84-2.66c2.72,0,4,1.83,4,4.25V59.93h7.52V44.5c0-5.4-2.77-9.8-9-9.8-2.52,0-5.54,1.14-6.88,3.46V35.34h-7.27V59.93h7.52ZM330.4,30.42h-1.81v4.92h-1.23V30.42h-1.8V29.35h4.84Zm8.2,4.92h-1.23V30.57h0l-1.74,4.77h-1.18l-1.68-4.77h0v4.77h-1.23v-6h2.12l1.4,3.91h0l1.45-3.91h2.11ZM263.88,23.42a4.41,4.41,0,0,1,3.18,7.5,4.42,4.42,0,0,1-4.81,1,4.45,4.45,0,0,1-2.73-4.08,4.42,4.42,0,0,1,4.36-4.4Zm-3.71,11.92h7.52V59.93h-7.52V35.34ZM246.51,59.93H254V24.11h-7.52V59.93Zm-4.8-7.07c-1.19,4.25-5.09,7.82-11.33,7.82-6.78,0-12.81-4.85-12.81-13.12,0-7.91,5.88-13,12.27-13,7.62,0,12.31,4.7,12.31,12.62a16.33,16.33,0,0,1-.14,2.32H224.89a5.31,5.31,0,0,0,5.59,4.75c2.72,0,4.25-1.28,5-3.21Zm-6.83-8.17c-.09-1.88-1.38-4.15-4.95-4.15A4.66,4.66,0,0,0,225,44.69ZM215,59.93V53.45H203.46l11.33-11.92V35.34H194.66v6.44H205.2L194.36,53.3v6.63Zm-23.9-7.07c-1.18,4.25-5.09,7.82-11.33,7.82C173,60.68,167,55.83,167,47.56c0-7.91,5.89-13,12.27-13,7.62,0,12.32,4.7,12.32,12.62a15,15,0,0,1-.15,2.32H174.27a5.32,5.32,0,0,0,5.59,4.75c2.72,0,4.26-1.28,4.95-3.21Zm-6.82-8.17c-.1-1.88-1.39-4.15-5-4.15a4.67,4.67,0,0,0-4.9,4.15Zm-20.34,8.17c-1.19,4.25-5.1,7.82-11.33,7.82-6.78,0-12.81-4.85-12.81-13.12,0-7.91,5.88-13,12.27-13,7.62,0,12.32,4.7,12.32,12.62a18,18,0,0,1-.15,2.32H147.11a5.32,5.32,0,0,0,5.59,4.75c2.72,0,4.26-1.28,5-3.21Zm-6.83-8.17c-.1-1.88-1.38-4.15-4.95-4.15a4.66,4.66,0,0,0-4.89,4.15Zm-19.3-9.35a7.31,7.31,0,0,0-2-.24c-2,0-5.09.79-6.38,3.56V35.34h-7.27V59.93h7.52V49.2c0-4.9,2.72-6.68,5.74-6.68a10.42,10.42,0,0,1,2.37.24ZM91.89,59.93V24.11h7.37V37.67c1-1.54,3.76-2.92,7.13-2.92,7.12,0,11.43,5.44,11.43,12.81,0,7.53-4.85,12.92-11.73,12.92-3.27,0-5.79-1.44-6.93-3.32v2.77Zm12.86-18.4c-2.92,0-5.59,1.93-5.59,6.08s2.67,6.14,5.59,6.14,5.54-2,5.54-6.14S107.67,41.53,104.75,41.53Z"
                  fill="#001e62"
                ></path>
                <path
                  data-v-e3291796=""
                  d="M36.73,39.21c-13.57,4-24.51,15.29-24.52,30.65l24.46,0Z"
                  fill="#0057b8"
                ></path>
                <path
                  data-v-e3291796=""
                  d="M36.73,39.21c-.35,14.15,7,28,21.57,32.79l7.58-23.26Z"
                  fill="#00a8ec"
                ></path>
                <path
                  data-v-e3291796=""
                  d="M36.73,39.21c13.35,4.7,28.81,2,37.85-10.38L54.8,14.43Z"
                  fill="#0057b8"
                ></path>
                <path
                  data-v-e3291796=""
                  d="M36.73,39.21C45.32,28,47.57,12.43,38.55,0L18.75,14.36Z"
                  fill="#00a8ec"
                ></path>
                <path
                  data-v-e3291796=""
                  d="M36.73,39.21C28.69,27.56,14.61,20.62,0,25.36L7.54,48.63Z"
                  fill="#004282"
                ></path>
              </svg>
              <Typography variant="h5" noWrap component="div">
                <NavLink id="home-link" className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink id="help-link" className="nav-link" to="/help">
                  Help
                </NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
      </ThemeProvider>
    </ApolloProvider>
  );
}

# Welcome to the Breezeline React Developer Challenge!

This is a pretty barebones React project that has been configured to use Material UI, React Router, Apollo GraphQL Client.
When you view the app initially, you will see a basic list of tasks todo. It's supposed to be a functioning TODO List application, which is where you come in!

The React app is communicating with a GraphQL server at [http://todo-api.abbtst.net:4000/api](http://todo-api.abbtst.net:4000/api).  To see the GraphQL api and try it out,
you can view the GraphiQL interface at [http://todo-api.abbtst.net:4000/graphiql](http://todo-api.abbtst.net:4000/graphiql).
Click the Docs link on the right side to see the queries and mutations available in API, and you can
execute queries on the left side.

To start the React app, make sure you have a recent version of NodeJS installed.
Then, open a terminal window, and run these commands:

1. npm install
2. REACT_APP_API_URL=http://todo-api.abbtst.net:4000/api PORT=3000 npm start

You should then be able to access the app at [http://localhost:3000](http://localhost:300)

## Directions
Here are the tasks that you must complete as part of the challenge:

1. On landing page, todo items are listed. Convert it from a basic list display to a list of items with
checkboxes using Material UI.

2. Implement checking off todo items to mark them as complete. There should be a Material UI checkbox next to each item.
Hint: Toggling the checkboxes should call the "toggleCompleted" GraphQL mutation.
Bonus: display completed todo titles with as "crossed off", i.e. with strikethrough style.

3. Add a Material UI button as well as a small form or dialog to add a new Todo item. Hint: Calls the addTodo GraphQL mutation.

4. Add a Help page to the app. This should be a link in the top navigation bar that goes the path "/help". Define the new route using
React router and connect it to a new help component in the src/components directory. The Help page content should just be some
static text and is unimportant for our purposes.
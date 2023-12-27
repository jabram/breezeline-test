import { Box, Paper, Toolbar, Typography } from "@mui/material";

export default function Help() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4">Help</Typography>
      <Paper sx={{ p: 3 }}>
        <p>Here's a bunch of help content.</p>
        <p>
          Esse nostrud Lorem elit quis excepteur quis. In veniam fugiat
          consequat minim aliqua est reprehenderit nostrud deserunt dolore
          consequat ipsum do. Officia est sunt nostrud sunt ad officia ut. Qui
          eiusmod culpa eiusmod dolor sint non culpa in ipsum veniam mollit
          commodo anim exercitation. Consectetur laborum officia elit est.
          Consectetur adipisicing dolore ea non nostrud dolore. Do sint
          incididunt anim anim excepteur magna ad duis et.
        </p>
        <p>
          Adipisicing irure reprehenderit id consequat mollit. Officia elit
          fugiat culpa incididunt non deserunt quis est exercitation culpa. Aute
          labore occaecat non ut fugiat aliquip ea ut. In cupidatat ut eu et do
          velit sint sunt. Et Lorem et aute eiusmod ex id ut dolor. Do
          exercitation culpa ullamco duis irure.
        </p>
        <p>
          Aliquip qui cillum irure aliquip elit commodo. Voluptate eiusmod et ad
          proident fugiat dolore consectetur deserunt id. Aliquip incididunt
          excepteur ipsum est commodo quis pariatur minim velit esse incididunt.
          Minim veniam aliquip laboris ex ipsum deserunt.
        </p>
      </Paper>
    </Box>
  );
}

const express = require('express');

function main () {
  let server = express();

  // TODO: JWT Auth

  const port = process.env.PORT || 8000;
  server.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();

const express = require('express');

// Starting point of the server
function main () {
  let app = express(); // Export app for other routes to use
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();

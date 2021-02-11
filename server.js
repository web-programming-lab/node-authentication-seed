const express = require('express');
const server = express();

server.get('/heroes', (req, res) => {
  res.send([{ name: 'Superman' }]);
});

server.listen(4566, () => {
  console.log('a server with express is running....');
});

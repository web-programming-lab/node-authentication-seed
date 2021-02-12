const express = require('express');
const server = express();

server.get('/heroes', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send([
    { id: 11, name: 'Dr Nice from Server' },
    { id: 12, name: 'Narco from Server' },
    { id: 13, name: 'Bombasto from Server' },
    { id: 14, name: 'Celeritas from Server' },
    { id: 15, name: 'Magneta from Server' },
    { id: 16, name: 'RubberMan from Server' },
    { id: 17, name: 'Dynama from Server' },
    { id: 18, name: 'Dr IQ from Server' },
    { id: 19, name: 'Magma from Server' },
    { id: 20, name: 'Tornado from Server' }
  ]);
});

server.listen(4566, () => {
  console.log('a server with express is running....');
});

const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const {} = require('./config/dbConnection');
const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});
require('./config/socket')(io);
app.get('/data', (req, res) => {
  console.log('call data');

  res.json({name: 'chandan'});
});

httpServer.listen(3008);

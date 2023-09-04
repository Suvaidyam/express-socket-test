const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.static('public'));
app.use(cors())

const server = require('http').createServer(app);
require('./socket.io').initialize(server);
const port = process.env.PORT || 2300;
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.use('/', require('./app'))
server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
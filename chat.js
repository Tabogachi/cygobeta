var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  maxHttpBufferSize: 10e7
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/chat1', (req, res) => {
  res.sendFile(__dirname + '/chat1.html');
});

io.on('connection', (socket) => {
  console.log('Welcome kid');
});

io.on('connection', (socket) => {
  console.log('Welcome sista');
  socket.on('disconnects', () => {
    console.log('Someone died');
  });
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
});

const port = process.env.PORT || 3000;
app.get('/CygoLogo.jpg', (req, res) => {
  res.sendFile(__dirname + '/CygoLogo.jpg');
});

app.get('/customize.jpg', (req, res) => {
  res.sendFile(__dirname + '/customize.jpg');
});

app.get('/bg.jpg', (req, res) => {
  res.sendFile(__dirname + '/bg.jpg');
});

http.listen(port, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    var memberCount = socket.length;
    console.log('Epic server members: ' + memberCount);
  });
});


io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', socket => {
  socket.join('some room');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

io.on("private", function(data) {       
  io.sockets.sockets[data.to].emit("private", { from: client.id, to: data.to, msg: data.msg });
  client.emit("private", { from: client.id, to: data.to, msg: data.msg });
});

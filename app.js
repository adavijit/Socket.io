var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
io.on('connection', function(socket) {
   console.log('A user connected');

   setTimeout(function(){
      socket.emit('testEvent',{
         description:'A custom event'
      });
   },3000);

   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});
http.listen(3000, function() {
   console.log('listening on *:3000');
});
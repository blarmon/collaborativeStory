var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var story = ["once upon a time:"];


io.on('connection', function (socket) {
    
    for (var i in story) {
      socket.emit('populate_messages', { fragment: story[i] } );
    }
    
    socket.on('submission', function(data){
    story.push(data);
    io.sockets.emit('submit', {submit: data});
  });
    
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

$(document).ready(function(){
    
    var socket = io.connect();
    socket.on('populate_messages', function(data) {
       $('#story').append('<li class=piece>' + data.fragment + ' ');
     }); 
    
  $('form').submit(function(){
      var contribution =  $('#contribution').val()
       socket.emit('submission', contribution);
       $('#contribution').val('');
  }); 
  
  socket.on('submit', function(data){
      
      $('#story').append('<li class=piece>' + data.submit + ' ');
  });
  
});
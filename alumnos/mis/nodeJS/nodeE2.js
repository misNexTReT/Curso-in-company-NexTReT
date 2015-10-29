var http = require('http');

  var mensaje = 'Hola a todos, ahora usando HTTP con C9.io\n';

  http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(mensaje);
  }).listen(process.env.PORT, process.env.IP);

  console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');
  var http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(301, {
      'Location': 'http://www.google.es/'
    });
      res.end();
  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor fuencionando en http://'+process.env.IP+':'+process.env.PORT+'/');
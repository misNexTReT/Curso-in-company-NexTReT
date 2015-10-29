console.log("test1 iniciado")

var http = require('http');
var url = require('url');

var i = 0;

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        i++;
        res.end('Numero de visitas: ' + i);

    } else if (pathname === '/otro') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end('sencillamente otra página');
    } else if (pathname === '/alindex') {
        res.writeHead(301, {
            'Location': '/'
        });
        res.end();    
    } else if (pathname === '/write') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        
        //WRITE
        i++;
        var fs = require('fs');
        var data = 'Numero de visitas: ' + i;
        fs.writeFile('archivo.txt', data, function (err) {
            if (!err) {
                console.log('Datos guardados en el archivo.txt');
            } else {
                throw err;
            }
        });
        
        res.end('Escribimos en un fichero el numero de visitas. Actualmente: ' + i);


        
    }else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Querido... 404!');
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
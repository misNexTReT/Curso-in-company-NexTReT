  var http = require('http'),
      url = require('url');

var miTanque = null;
var miCama = null;

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var data,cuantos;
    var query = url.parse(req.url).query;
    console.log("La parametro: "+query);
    if (query != null){
         data = query.split("=");
         cuantos = data[1];
         console.log("Cuantos: "+cuantos);
    }
    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      miTanque = new tanque(40,51,25.5,30.5,"Gris Claro",29);
      miCama = new cama(10,51,25.5,10,"Rojo",5,"Piedra volcánica");
      res.end('Index!\nCreamos Tanque y Cama\n');

    } else if (pathname === '/llenar/tanque') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miTanque.llenado(parseInt(cuantos)));
    } else if (pathname === '/llenar/cama') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miCama.llenado(parseInt(cuantos))));
    } else if (pathname === 'llenar/peces') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miTanque.addPeces(parseInt(cuantos))));
    } else if (pathname === '/llenar/plantas') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miCama.addPlantas(parseInt(cuantos))));
    } else if (pathname === '/alindex') {
        res.writeHead(301, {
        'Location': '/'
      });
      res.end();    

    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Querido... 404!');
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
  
  var tanque = function (capacidad, largo, ancho, alto, color,nivelMaxAgua){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    
    this.agua = 0;
    
    this.llenado = function (cuanta){
        var ret = "";
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        ret = "LLenado - Tenia " + this.agua + " litros de agua\n"
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
        ret += this.desague();
        return ret;
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            var ret = "";
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            ret = "Vaciado - Tenia " + this.agua + " litros de agua\n";
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
            ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
            return ret;
        } else 
            return ""
    }
};
var cama = function (capacidad, largo, ancho, alto, color,nivelMaxAgua,sustrato){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    this.sustrato = sustrato;
    
    this.agua = 0;
    
    this.llenado = function (cuanta){
        var ret = "";
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        ret = "LLenado - Tenia " + this.agua + " litros de agua\n";
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
        ret += this.desague();
        return ret;
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            var ret = "";
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            ret = "Vaciado - Tenia " + this.agua + " litros de agua\n";
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
            ret += "Vaciado - Ahora tengo " + this.agua + " litros de agua\n";
            return ret;
        } else 
            return ""
    }
};

tanque.prototype.peces=0;
tanque.prototype.addPeces = function(cuanto){
    var ret = "";
    console.log("LLenado - Tenia " + this.peces + " peces");
    ret = "LLenado - Tenia " + this.peces + " peces\n";
    this.peces+=cuanto;
    console.log("LLenado - Ahora tengo " + this.peces + " peces");
    ret += "LLenado - Ahora tengo " + this.peces + " peces\n";
    return ret;
}
cama.prototype.plantas=0;
cama.prototype.addPlantas = function(cuanto){
    var ret = "";
    console.log("LLenado - Tenia " + this.plantas + " plantas");
    ret = "LLenado - Tenia " + this.plantas + " plantas\n";
    this.plantas+=cuanto;
    console.log("LLenado - Ahora tengo " + this.plantas + " plantas");
    ret += "LLenado - Ahora tengo " + this.plantas + " plantas\n";
    return ret;
}
const http = require("http");

http
  .createServer((req, res) => {
    res.write("hola mundo");
    res.end();
  })
  .listen(3001);

console.log("Escuchando puerto 3001");

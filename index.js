const http = require("http");
const per = require("../ejercicio03_json/persona"); //Requerimos persona.js llamandolo de esta forma porque lo creamos nosottos

console.log(per);

const server = http.createServer((req, res) => {
  res.end("");
});

server.listen(8000, () => console.log("listening on port 3000"));

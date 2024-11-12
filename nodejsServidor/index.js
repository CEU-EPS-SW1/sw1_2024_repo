const http = require('http');
require('dotenv').config();
const argv = require('minimist')(process.argv.slice(2));
const os = require("os");
console.log(os.cpus());

console.log(process.argv);
console.log(argv)
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log("Nueva conexión");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

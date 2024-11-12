const http = require('http');
const crypto = require('crypto');

const port = 3000;
const server = http.createServer((req, res) => {
  let time = Date.now();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(crypto.randomBytes(1000).toString('hex'));
  }
  console.log(Date.now()-time);
});
server.listen(port, () => {console.log(`Server running at port ${port}`);});

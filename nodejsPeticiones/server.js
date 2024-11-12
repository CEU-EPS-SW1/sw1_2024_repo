const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  req.on('data', d => {
    process.stdout.write(d);
  });
  req.on('end', () => {
    console.log('\nNo more data');
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});
server.listen(port, () => {console.log(`Server running at port ${port}`);});

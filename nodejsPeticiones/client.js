const https = require('http');
const data = "Mensaje";
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'text/html',
    'Content-Length': data.length
  }
};
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {process.stdout.write(d);});
});
req.on('error', error => {console.error(error);});
req.write(data);
req.end();

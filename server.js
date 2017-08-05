const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: process.env.cert
  //cert: fs.readFileSync('server.crt')
};
console.log('key');
console.log('crt');
console.log(process.env.cert);
console.log(Buffer.from(process.env.cert, 'utf8'));

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);

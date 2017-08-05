const https = require('https');
const fs = require('fs');

const options = {
  key: process.env.cert,
  cert: fs.readFileSync('server.crt')
};
console.log('key');
console.log('crt');

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);

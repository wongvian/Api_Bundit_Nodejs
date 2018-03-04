// This will be our application entry. We'll setup our server here.
const http = require('http');
const https = require('https');
const fs = require('fs');

var options = {
    key: fs.readFileSync('STAR_snru_ac_th.key'),
    cert: fs.readFileSync('ssl-bundle.crt')
  };
  

const app = require('../app'); // The express app we just created




//const port = parseInt(process.env.PORT, 10) || 8001;
//app.set('port', port);


//http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);


//const server = http.createServer(app);
//server.listen(port);
//console.log('server port ' + port)
var http = require('http'),
    fs = require('fs');

http.createServer(function (req, resp) {
    console.log('Server running at port: 3000');

    fs.readFile("index.htm", function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        }

        resp.end();
    });
}).listen(3000); 
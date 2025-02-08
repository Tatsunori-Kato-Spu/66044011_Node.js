const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const os = require('os');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');   
    res.end(`CSI203: DIGITAL ARCHITECTURE AND OPERATING SYSTEM
            \nThis is a sample learning tool for the CSI203 course.
            \nWorkshop #3: startNode.js
            \nPlatform: ${os.platform()} 
            \nArchitecture: ${os.arch()} 
            \nRelease: ${os.release()} 
            \nHostname: ${os.hostname()} 
            \nUptime: ${os.uptime()} seconds
            \nNode.js version: ${process.version}

            \nCreate file workshop3 by
            \nName: Tatsunori Kato
            \nID: 66044011`);
            });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

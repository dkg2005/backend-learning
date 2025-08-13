let http = require('http');
// const os = require('os');
let server = http.createServer((req, res) => {
    res.end("Server Created Sucessfully, Dhruv");
}).listen("8000")
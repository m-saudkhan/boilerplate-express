let express = require('express');
let app = express();
let http = require('http');



const server=http.createServer(app);


server.listen(8080, () => {
    console.log("Hello World");
});















 module.exports = app;

const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {
    // get routing after slash
    let filePath = request.url.substring(1);
    if (filePath === "") filePath = "main.html";
    fs.readFile(filePath, function (error, data) {
        if (error) {
            response.statusCode = 404;
            response.end("Resource not found!");
        }
        else {
            if (filePath.endsWith(".js")) response.setHeader("Content-Type", "text/javascript");
            response.end(data);
        }
    });
}).listen(3777, function () {
    console.log("Server started at http://localhost:3777");
})
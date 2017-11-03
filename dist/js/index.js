"use strict";
var app = require("App");
var debug = require("debug")("express:server");
var http = require("http");
//get port from environment and store in Express.
var port = normalizePort(process.env.PORT || 8080);
app.set("port", port);
// create http server
var server = http.createServer(app);
// listen on provided ports
server.listen(port);
// add error handler
server.on("error", onError);
// start listening on port
server.on("listening", onListening);
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + "requires elevated privileges");
            process.exit(1);
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    debug("Listening on " + bind);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQy9DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixpREFBaUQ7QUFDakQsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRCLHFCQUFxQjtBQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXBDLDJCQUEyQjtBQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBCLG9CQUFvQjtBQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1QiwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFHcEMsdUJBQXVCLEdBQUc7SUFDdEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU3QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsYUFBYTtRQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBR0Q7O0dBRUc7QUFDSCxpQkFBaUIsS0FBSztJQUNsQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUssSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFDaEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ2hCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXJCLHVEQUF1RDtJQUN2RCxNQUFNLENBQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLFFBQVE7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxZQUFZO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQztRQUNWO1lBQ0ksTUFBTSxLQUFLLENBQUM7SUFDcEIsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNIO0lBQ0ksSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFDL0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ2hCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxQixLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gcmVxdWlyZShcIkFwcFwiKTtcclxudmFyIGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZXhwcmVzczpzZXJ2ZXJcIik7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcblxyXG4vL2dldCBwb3J0IGZyb20gZW52aXJvbm1lbnQgYW5kIHN0b3JlIGluIEV4cHJlc3MuXHJcbnZhciBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDgwODApO1xyXG5cclxuYXBwLnNldChcInBvcnRcIiwgcG9ydCk7XHJcblxyXG4vLyBjcmVhdGUgaHR0cCBzZXJ2ZXJcclxudmFyIHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XHJcblxyXG4vLyBsaXN0ZW4gb24gcHJvdmlkZWQgcG9ydHNcclxuc2VydmVyLmxpc3Rlbihwb3J0KTtcclxuXHJcbi8vIGFkZCBlcnJvciBoYW5kbGVyXHJcbnNlcnZlci5vbihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG5cclxuLy8gc3RhcnQgbGlzdGVuaW5nIG9uIHBvcnRcclxuc2VydmVyLm9uKFwibGlzdGVuaW5nXCIsIG9uTGlzdGVuaW5nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbCkge1xyXG4gICAgdmFyIHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcclxuXHJcbiAgICBpZihpc05hTihwb3J0KSkge1xyXG4gICAgICAgIC8vIG5hbWVkIHBpcGVcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBvcnQgPj0wKSB7XHJcbiAgICAgICAgLy8gcG9ydCBudW1iZXJcclxuICAgICAgICByZXR1cm4gcG9ydDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRXZlbnQgbGlzdGVuZXIgZm9yIEhUVFAgc2VydmVyIFwiZXJyb3JcIiBldmVudC5cclxuICovXHJcbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgIGlmKGVycm9yLnN5c2NhbGwgIT09IFwibGlzdGVuXCIpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgIGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gXCJQaXBlIFwiICsgcG9ydFxyXG4gICAgICAgIDogXCJQb3J0IFwiICsgcG9ydDtcclxuXHJcbiAgICAvLyBoYW5kbGUgc3BlY2lmaWMgbGlzdGVuIGVycm9ycyB3aXRoIGZyaWVuZGx5IG1lc3NhZ2VzXHJcbiAgICBzd2l0Y2goZXJyb3IuY29kZSkge1xyXG4gICAgICAgIGNhc2UgXCJFQUNDRVNcIjogXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYmluZCArIFwicmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc1wiKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIGNhc2UgXCJFQUREUklOVVNFXCI6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYmluZCArIFwiIGlzIGFscmVhZHkgaW4gdXNlXCIpO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRXZlbnQgbGlzdGVuZXIgZm9yIEhUVFAgc2VydmVyIFwibGlzdGVuaW5nXCIgZXZlbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcclxuICAgIHZhciBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcclxuICAgIHZhciBiaW5kID0gdHlwZW9mIGFkZHIgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IFwicGlwZSBcIiArIGFkZHJcclxuICAgICAgICA6IFwicG9ydCBcIiArIGFkZHIucG9ydDtcclxuICAgIGRlYnVnKFwiTGlzdGVuaW5nIG9uIFwiICsgYmluZCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==

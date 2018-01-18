var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
//sudo npm install socket.io
var io = require("socket.io").listen(server);

app.use(express.static("./"));

io.on("connection",function(socket){
	console.log('连接了')
	socket.on("down",function(data){
		// io.sockets.emit()//发给所有人，包括自己
		//广播不包括自己
		socket.broadcast.emit("down",data);
	})
	socket.on("move",function(data){
		socket.broadcast.emit("move",data);
	})
	socket.on("up",function(data){
		socket.broadcast.emit("up",data);
	})
})

server.listen(7070,function () {
	console.log('开启成功：http://localhost:7070')
})
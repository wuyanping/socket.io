// server.js
var server = require("ws").Server;

var ws = new server({
	port:3030
});
var arr = [];
//有用户连接时触发
ws.on("connection",function(socket) {
	arr.push(socket);
	console.log("连接了"+arr.length);
	//接收消息时触发
	socket.on("message",function(msg){
		console.log(msg)
		//广播，就是发送给所有人
		for (var i = 0; i < arr.length; i++) {
			arr[i].send(msg);
		}		
	})
	// socket.send("发送的消息")
	

	//断开连接时触发
	socket.on("close",function(){	
		arr.splice(arr.indexOf(this),1)
		console.log("有用户断开了,在线还有"+arr.length)
	})
})




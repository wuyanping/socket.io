const server = require('http').createServer()
// 1.
// require('socket.io')(httpServer[, options])
// httpServer （http.Server）要绑定的服务器。

// const io = require('socket.io')(server, {
// 	// path: '/test',   		// 捕获路径的名称
// 	serverClient: false,	// 是否提供客户端文件（true ）
// 	pingInterval: 10000,   	// 这两个参数将在客户端知道服务器不再可用之前影响延迟
// 	pingTimeout: 5000,
// 	cookie: false
// })
// server.listen(3333, function() {
// 	console.log('3333 成功')
// })

// 2.
// Server（port [，options]）
// port （数字）一个要听的端口（一个新的http.Server将被创建）
// options （目的）

const io = require('socket.io')(3000, {
  path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});


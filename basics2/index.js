var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res) {
	// res.send('<h1>Hello world!!</h1>')
	res.sendFile(__dirname + '/index.html')
})

// 链接时触发
io.on('connection', function(socket) {
	console.log('a user connected')

	// 断开时触发
	socket.on('disconnect', function() {
		console.log('user disconnect')
	})

	socket.on('chat message', function(msg) {
		console.log('message: ' + msg)
		// 发送给每个人
		io.emit('chat message', msg)
		// 发送一个消息给除了某个套接字以外的每个人
		// socket.broadcast.emit('chat', msg)
	})

	socket.on('focus', function(msg) {
		socket.broadcast.emit('focus')
	})

	socket.on('blur', function(msg) {
		socket.broadcast.emit('blur')
	})
})


http.listen(3333, function() {
	console.log('listening on *:3333')
})
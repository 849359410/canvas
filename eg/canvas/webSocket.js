const WebSocket = require('ws')
const ws = new WebSocket.Server({port: 9999}, () => {
	console.log('socket start');
})
// 广播
ws.on('connection', (client) => {
	// client.send('欢迎光临！'); //数据传输字符串
	client.on('message', msg => {
		console.log('来自前端的数据：' + msg);
		// broadcast.send(msg);
		client.send(msg);
	})
	client.on('close', msg => {
		console.log('前端关闭请求：', + msg);
	})
})


var http = require('http');

http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
	 if(request.url!=="/favicon.ico"){  //清除第2此访问  
		response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
		console.log('访问');
		// 发送响应数据 "Hello World"
		response.end('Hello World\n访问结束');//有协议头就必须有协议尾
		//response.end('访问结束');
	 }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
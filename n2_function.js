var http = require('http');//http 是node自带的模块
var otherfun = require('./models/otherfun'); 
var otherfuns = require('./models/otherfuns');   
      
http.createServer(function (request, response) {//request：浏览器的请求对象、response向浏览器的响应
		response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//输出类型   
		if(request.url!=="/favicon.ico"){//清除第2此访问    
		
		fun1(response);
		 
		otherfun(response); 
		 
		otherfuns.fun3(response);
		 
		var funname = 'fun4';
		otherfuns[funname](response);//用字符串来调用对应的函数
	 
		var result = otherfuns.add(1,2,response);
		console.log(result);
		 
		response.end();  //输出http的协议尾
		}
}).listen(8888);//监听8000端口

console.log('Server running at http://127.0.0.1:8888/');    

//---普通函数      
function  fun1(res){
	console.log("我是fun1");  
    res.write("你好，我是fun1<br/>");      
} 
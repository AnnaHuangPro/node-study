
//支持多个函数
module.exports={
	fun3:function(response){
		console.log("我是fun3");
		response.write("你好，我是fun3<br/>");
	},//记住逗号
	fun4:function(response){
		console.log("我是fun4");
		response.write("你好，我是fun4<br/>");
	},
	add:function(a,b,response){
		console.log("加法");
		return a+b;
	}
}
function fun2(res){
	res.write("你好，我是fun2<br/>");
	console.log("我是fun2");
	//res.end("");//http协议尾
}
	module.exports = fun2; //只支持一个函数 如果你把某个函数声明为可调用的就需要用这一行



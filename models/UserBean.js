
var events = require("events");//事件模块    
//var http = require('http');   
 
function UserBean(){
    this.eventEmit = new events.EventEmitter(); //实例化一个事件发生器
    this.register=function(req,res){
        console.log("注册"); 
        req['uname']="aa";//模拟客户端的用户名和密码 ，会在request里
        req['pwd']="bb";
		//中间省略了验证，假如验证成功
		//this.login();//看起来逻辑简单，但是后来很难维护
        this.eventEmit.emit('注册成功',req['uname'],req['pwd']);  //抛出事件消息 
		//this.eventEmit.emit('注册失败',req['uname'],req['pwd']); 
    }, 
    this.login=function(req,res){
        console.log("登录"); 
        res.write("<br/>用户名:"+req['uname']+"<br/>"); 
        res.write("密码:"+req['pwd']+"<br/>"); 
        res.write("登录<br/>"); 
	}    
}    
    
module.exports = UserBean;
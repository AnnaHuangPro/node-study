
function User(id,name,age){
	this.id = id;
	this.name = name;
	this.age = age;
	this.enter=function(response){
		console.log(this.name+"进入图书馆");
		response.write(this.name+"进入图书馆<br/>");
	}
}
	module.exports = User;
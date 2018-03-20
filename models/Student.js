
var User = require('./User');

function Student(id,name,age){
	  User.apply(this,[id,name,age]);
	  this.study=function(res){
        res.write(this.name+"同学学习<br/>");
    }
}
module.exports = Student;
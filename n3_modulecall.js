var http = require('http');    
var User = require('./models/User');
var Teacher = require('./models/Teacher');

http.createServer(function (request, response){        
     response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});        
        if(request.url!=="/favicon.ico"){//清除第2此访问
		var user = new User(2,'UserName',20);
		user.enter(response);
		var teacher = new Teacher(2,'TeacherName',40);
		teacher.enter(response);
		teacher.teach(response);
        response.end();
    }
}).listen(8000);        
console.log('Server running at http://127.0.0.1:8000/');
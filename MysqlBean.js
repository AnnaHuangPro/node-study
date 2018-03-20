var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection  
var connection = mysql.createConnection({ //创建连接     
    host: 'localhost',       //主机  
    user: 'root',               //MySQL认证用户名  
    password: 'root',        //MySQL认证用户密码  
    database: 'test',  
    port: '3306'                   //端口号  
});

//创建一个connection  
connection.connect(function(err){  
    if(err){         
        console.log('连接错误:'+err);  
        return;  
    }  
    console.log('连接数据库成功');  
}); 
//----插入
/*
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var addParam = ['bbb','bbb'];
connection.query(userAddSql,addParam,function(err,rs){
    if(err){
        console.log('插入数据失败:',err.message);
        return;
    }
        console.log('插入数据成功');
});
*/
//执行查询  

var userQuerySql = 'SELECT * from user where uid = ?';
var QueryParam = [3];
connection.query(userQuerySql,QueryParam,function(err, rs){
    if (err) {  
        console.log('[query] - :'+err);  
        return;  
    } 
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname); 
    }
});  

//关闭connection  
connection.end(function(err){  
    if(err){ 
        console.log('关闭数据库失败：s'+err.toString());
        return;  
    }  
    console.log('关闭数据库成功');  
});
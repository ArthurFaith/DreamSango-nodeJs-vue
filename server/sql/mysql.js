var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'dreamsango'
});

connection.connect();

var Mysql = {
	//列表查询
	searchList:function(res,name,callback){
		var  sql = 'SELECT * FROM '+name;
		//var sql1 = 'SELECT p.*,s.school FROM person p LEFT JOIN school s ON p.bid=s.id;';//有主键查询
		connection.query(sql,function (err, result) {
		        if(err){
		          console.log('[SELECT ERROR] - ',err.message);
		          return;
		        }
		   		

		   		if(callback && callback instanceof Function){
		   			callback(res,result)
		   		}
		 });
	},
	//详情查询
	searchDetail:function(res,name,options,callback){
		var  sql = 'SELECT * FROM '+name+' WHERE '+options.key+'='+options.value;
		//var sql1 = 'SELECT p.*,s.school FROM person p LEFT JOIN school s ON p.bid=s.id;';//有主键查询
		connection.query(sql,function (err, result) {
		        if(err){
		          console.log('[SELECT ERROR] - ',err.message);
		          return;
		        }
		   		
		   		if(callback && callback instanceof Function){
		   			callback(res,result)
		   		}
		 });
	},
	//关联表查询
	searchRelation:function(res,sqlSevice,callback){
		var sql = sqlSevice;
		connection.query(sql,function (err, result) {
		        if(err){
		          console.log('[SELECT ERROR] - ',err.message);
		          return;
		        }
		   		
		   		if(callback && callback instanceof Function){
		   			callback(res,result)
		   		}
		 });
	},
	//插入
	add:function(res,options,callback){
		//插入
		//options={
		//	name:'',//表名
		//	params:'',//所需插入的字段
		//	value:[]//插入字段的值
		//}
		var  addSql = 'INSERT INTO '+options.name+'('+options.params+') VALUES(?,?,?)';
		var  addSqlParams = options.value;
		console.log(addSql)
		connection.query(addSql,addSqlParams,function (err, result) {
		      if(err){
		       console.log('[INSERT ERROR] - ',err.message);
		       return;
		      }       
		      
		      if(callback && callback instanceof Function){
		   			callback(res,result)
		   		}
		     
		});
	},
	update:function(res,sqlService,callback){
		//更新
		//UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
		var updateSql = sqlService;
		connection.query(updateSql,function (err, result) {
		      if(err){
		       console.log('[INSERT ERROR] - ',err.message);
		       return;
		      }       
		     
		     if(callback && callback instanceof Function){
		   			callback(res,result)
		   		}
		     
		});
	},
	delete:function(res,options,callback){
		//options={
		//	name:'',//表名
		//	key:'',//所需插入的字段
		//	value:''//插入字段的值
		//}
		var deleteSql = "DELETE FROM "+options.name+" WHERE "+options.key+" = "+options.value;
		connection.query(deleteSql,function (err, result) {
	      if(err){
	       console.log('[INSERT ERROR] - ',err.message);
	       return;
	      }       
	      if(callback && callback instanceof Function){
   			callback(res,result)
   		  }
		     
		});
	}
}

module.exports = Mysql;

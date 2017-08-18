var sqlDo = require('../../sql/mysql');
//建筑物移除
var removeBuilding = function(req,res){
	console.log(req.query)
	var options = {
		id:req.query.id,
	};
	var mes ={
		errorcode:0,
		errormes:''
	};
	if(!req.query.id){
		mes.errorcode = -1;
		mes.errormes = '没有传建筑物id';
		res.send(JSON.stringify(mes));
	}	
	else{		
		var sqlService= 'UPDATE building_builded SET Bid = null,Bposition = 0,Blv = 0 WHERE id = '+options.id;
		sqlDo.update(res,sqlService,function(res,result){
			res.set("Content-Type", "application/json;charset=utf-8");
			mes.errorcode = 0;
			mes.errormes = 'success';
			res.send(JSON.stringify(mes));			
		})
		
	}
		
}

exports.removeBuilding = removeBuilding;
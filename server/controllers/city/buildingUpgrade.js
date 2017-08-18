var sqlDo = require('../../sql/mysql');
//建筑物升级
var upgradeBuilding = function(req,res){
	console.log(req.query)
	var options = {
		Blv:Number(req.query.Blv)+1,
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
	else if(!req.query.Blv){
		mes.errorcode = -1;
		mes.errormes = '没有传建筑物等级';
		res.send(JSON.stringify(mes));
	}
	else if(req.query.Blv>2){
		mes.errorcode = -1;
		mes.errormes = '建筑物等级已达上限';
		res.send(JSON.stringify(mes));
	}	
	else{		
		var sqlService= 'UPDATE building_builded SET Blv = '+options.Blv+' WHERE id = '+options.id;
		sqlDo.update(res,sqlService,function(res,result){
			res.set("Content-Type", "application/json;charset=utf-8");
			mes.errorcode = 0;
			mes.errormes = 'success';
			res.send(JSON.stringify(mes));			
		})
		
	}
		
}

exports.upgradeBuilding = upgradeBuilding;
var sqlDo = require('../../sql/mysql');
//建筑物添加
var addBuilding = function(req,res){
	console.log(req.query)
	var options = {
		Bid:req.query.Bid,
		Bposition:req.query.Bposition,
		Blv:req.query.Blv
	};
	var mes ={
		errorcode:0,
		errormes:''
	};
	if(!req.query.Bid){
		mes.errorcode = -1;
		mes.errormes = '没有传建筑物id';
		res.send(JSON.stringify(mes));
	}
	else if(!req.query.Blv){
		mes.errorcode = -1;
		mes.errormes = '没有传建筑物等级';
		res.send(JSON.stringify(mes));
	}
	else if(!req.query.Bposition){
		mes.errorcode = -1;
		mes.errormes = '没有传建筑物位置';
		res.send(JSON.stringify(mes));
	}
	else{
		var sqlService= 'UPDATE building_builded SET Bid = '+options.Bid+',Bposition = '+options.Bposition+',Blv = '+options.Blv+' WHERE id = '+options.Bposition;
		sqlDo.update(res,sqlService,function(res,result){
			res.set("Content-Type", "application/json;charset=utf-8");
			mes.errorcode = 0;
			mes.errormes = 'success';
			res.send(JSON.stringify(mes));			
		})
	}
	
	
}

exports.addBuilding = addBuilding;
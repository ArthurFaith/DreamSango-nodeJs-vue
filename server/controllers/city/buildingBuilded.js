var sqlDo = require('../../sql/mysql');
//已建造建筑物查询
var buildingBuilded = function(req,res){
	var mes ={
		errorcode:0,
		errormes:''
	};
	var sqlSevice = 'SELECT b.*,l.buildName,l.buildCostGlod,l.buildCostStone,l.introduction,l.buildImagePath FROM building_builded b LEFT JOIN building_list l ON b.Bid=l.id';
	
	sqlDo.searchRelation(res,sqlSevice,function(res,result){
		res.set("Content-Type", "application/json;charset=utf-8");
		mes.errorcode = 0;
		mes.errormes = 'success';
		mes.value = result;
		res.send(JSON.stringify(mes));			
	})

	
	
}

exports.buildingBuilded = buildingBuilded;
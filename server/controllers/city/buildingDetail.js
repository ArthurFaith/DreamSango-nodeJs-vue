var sqlDo = require('../../sql/mysql');
//建筑物详情
var getBuildingDetail = function(req,res){
	var options={
		'key':'id',
		'value':req.body.id
	}
	sqlDo.searchDetail(res,'building',options,function(res,result){
		res.set("Content-Type", "application/json;charset=utf-8");
		res.send(JSON.stringify(result));
	})
	
}

exports.getBuildingDetail = getBuildingDetail;

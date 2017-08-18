var sqlDo = require('../sql/mysql');
var controller = require('../controllers/index');

module.exports = function(app) {
	app.all('*', function(req, res, next) {
		res.set("Access-Control-Allow-Origin", "*");
		res.set("Access-Control-Allow-Headers", "X-Requested-With");
		res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.set("X-Powered-By", ' 3.2.1')
		next();
	})

	//建筑物列表
	app.get('/buildingList', function(req, res) {
		//	console.log(req.query)
		sqlDo.searchList(res, 'building_list', function(res, result) {
			res.set("Content-Type", "application/json;charset=utf-8");
			res.end(JSON.stringify(result));
		})
	})

	//建筑物详情
	app.post('/buildingDetail', function(req, res) {
		//	console.log(req.body);
		controller.getBuildingDetail(req, res);
	})

	//建筑物添加
	app.get('/buildingAdd', function(req, res) {
		controller.addBuilding(req, res);
	})

	//已建造的建筑物查询
	app.get('/buildingBuilded', function(req, res) {
		controller.buildingBuilded(req, res);
	})

	//移除已建造的建筑物
	app.get('/removeBuilding', function(req, res) {
		controller.removeBuilding(req, res);
	})

	//升级
	app.get('/upgradeBuilding', function(req, res) {
		controller.upgradeBuilding(req, res);
	})
	
	
	
	
	
	
	
	
	
}
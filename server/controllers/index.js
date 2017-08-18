var getBuildingDetail = require("./city/buildingDetail").getBuildingDetail;
var addBuilding = require("./city/buildingAdd").addBuilding;
var buildingBuilded = require("./city/buildingBuilded").buildingBuilded;
var removeBuilding = require("./city/buildingRemove").removeBuilding;
var upgradeBuilding = require("./city/buildingUpgrade").upgradeBuilding;

module.exports = {
	getBuildingDetail,
	addBuilding,
	buildingBuilded,
	removeBuilding,
	upgradeBuilding,
}

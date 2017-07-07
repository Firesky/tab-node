var Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': './db/race.sqlite',
	'logging': false
});


var db = {};

db.race = sequelize.import(__dirname + '/models/race.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
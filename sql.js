
//var db = require('./db/db.js');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': 'db/basic-sqlite-database.sqlite'
});

var race = sequelize.define('race',{
	meetingDate: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	link: {
		type: Sequelize.STRING
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	venue: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	raceType: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	raceNumber: {
		type: Sequelize.NUMERIC,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	before_Json: {
		type: Sequelize.STRING
	},
	after_Json: {
		type: Sequelize.STRING
	}
});

sequelize.sync({force: false}).then(function(){
	console.log('EIS');

	race.create({
		link:'http://drstub.com',
		meetingDate : '2017-1-1',
		location : 'VIC',
		venue : 'MLD',
		raceType : 'G',
		raceNumber : 1,
		before_Json : '{hi:hi}',
		after_Json : '{bye:bye}'
	}).then(function(race){
		console.log(race);
	});
}).catch( function(e){
	console.log(e);
});

/*var params = {
								  TableName: 'TAB_Races',
								  Item: {
								    'RACE_ID' : {S: RACE_ID},
								    'Link' : {S: val._self},
								    'meetingDate' : {S: val.meeting.meetingDate},
								    'location' : {S: val.meeting.location},
								    'venue' : {S: val.meeting.venueMnemonic},
								    'raceType' : {S: val.meeting.raceType},
								    'raceNumber' : {N: String(val.raceNumber)},
								  }
								};
							var str = {'S': JSON.stringify(val)};
							if(val.raceStatus == 'Paying'){
								params.Item['result_Json'] = str;
							}else{
								params.Item['before_Json'] = str;
							}

							//console.log(RACE_ID);
							
							ddb.putItem(params, function(err, data) {
							  if (err) {
							    console.log("Error", err);
							  } else {
							  	console.log("Success", RACE_ID);
							  }
							});*/
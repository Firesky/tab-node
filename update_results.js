var db = require('./db.js');
var tab = require('./tab');

db.sequelize.sync({force:false}).then(function() {
	var where = {};
	//where.meetingDate = '2017-07-03';
	where.after_Json = null;

	db.race.findAll({
		where: where,
		attributes: ['link']
	}).then(function(races) {
		console.log(races.length);
		races.forEach(function(race){
			//console.log(race.link);
			tab.race(race.link,'nil', function(val){
				//console.log(val.meeting.meetingDate);
				if(val.raceStatus == 'Paying'){
					db.race.update({ after_Json: JSON.stringify(val) },
	  				{ where: { id: race.id } }).then (function(race){
	  					console.log('Result: '+race.link);
	  				});
				}else{
					console.log('No Results: '+race.id);
				}
				/*db.race.update({ after_Json: ' ' },
	  				{ where: { id: race.id } }).then (function(race){
	  					console.log('Clear');
	  			});*/
			});
		});
	});
});
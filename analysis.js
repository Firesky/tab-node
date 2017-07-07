var db = require('./db.js');
var cost = 0;
var win = 0;

function _win(b, r){
	var correct = 0;
	var creq = 3;
	var places = 3;

	//console.log(b);
	//console.log(r);
	for(x=0;x<places;x++){
		if(b.indexOf(r[x][0])>0){
			correct++;
		}
	}

	return correct==creq ? 1:0;
}

db.sequelize.sync({force:false}).then(function() {
	var where = {};
	//where.raceType = 'G';
	where.meetingDate = '2017-07-02';
	where.after_Json != null;


	db.race.findAll({
		where: where
	}).then(function(races) {
		//console.log(races);
		races.forEach(function(race){
			//console.log(race.after_Json);
			//console.log(val);
			//typeof race.after_Json != 'undefined' || 
			if(race.after_Json != null){
				var val = JSON.parse(race.after_Json);
				//var winner =1;
				cost = cost+24;
				var bets = typeof val.ratings[0] == 'undefined' ? [0]:val.ratings[0].ratingRunnerNumbers;
				var winner = _win(bets, val.results);
				if(winner==1){
					win = win +val.dividends[5].poolDividends[0].amount;
					console.log('Winner');
					console.log(val.ratings[0].ratingRunnerNumbers);
					console.log(val.results);
				}
				//win = win +val.dividends[5].poolDividends[0].amount;
				//console.log(val.dividends[5].poolDividends[0].amount);
				//console.log(val.ratings[0].ratingRunnerNumbers);
				//console.log(val.results);

				//console.log(val._self);
				console.log(val.meeting.meetingDate+" "+val.meeting.raceType+" Cost:$"+cost+" Winings:$"+win)
			}else{
				console.log('No Result');
			}
		});
	});
});


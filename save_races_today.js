//Save Todays Races to AWS

//var AWS = require('aws-sdk');
var tab = require('./tab');
var db = require('./db.js');

//AWS.config.loadFromPath('./config.json');
//ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

//var r = 0;
db.sequelize.sync({force:false}).then(function() {
	
	tab.dates('vic','today', function (url) {
		
		tab.meetings(url, function(meetings){
			
			for(x=0;x<meetings.length;x++){
				tab.races(meetings[x], function(races){
					
					for(x=0;x<races.length;x++){
						
						tab.race(races[x],'nil', function(val){
							var race_record = {
								link: val._self,
								meetingDate : val.meeting.meetingDate,
								location : val.meeting.location,
								venue : val.meeting.venueMnemonic,
								raceType : val.meeting.raceType,
								raceNumber : val.raceNumber,
								before_Json : JSON.stringify(val)
							}
							//console.log(race_record)
							db.race.create(race_record).then( function(race){
								console.log("Success", race.id, race.meetingDate);
							});;
						});
					}

				});
			}
				
		});
			
	});
});

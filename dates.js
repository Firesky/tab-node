//Get Dates
//today, tomorrow
var request = require('request');
var jurisdiction = 'vic';
var dateName = 'today';
var url = 'https://api.beta.tab.com.au/v1/tab-info-service/racing/dates?jurisdiction=vic';

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Error');
	} else {
		for(x=0;x<body.dates.length;x++){
			//console.log(body.dates[x].dateName);
			if(body.dates[x].dateName == dateName){
				console.log(body.dates[x]._links.meetings);
			}
		}
	}
});
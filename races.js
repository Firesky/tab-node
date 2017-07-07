
var request = require('request');
var url = 'https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2017-07-01/meetings/R/CAU/races?jurisdiction=VIC';
var races = [];

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Error');
	} else {
		console.log(body.races.length)
		for(x=0;x<body.races.length;x++){
			//console.log(body.meetings[x]._links.races);
			races.push(body.races[x]._links.self);
		}
		console.log(races);
	}
});
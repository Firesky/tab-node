var request = require('request');
var url = 'https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2017-07-01/meetings?jurisdiction=VIC';
var meetings = [];

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Error');
	} else {
		//console.log(body.meetings.length)
		for(x=0;x<body.meetings.length;x++){
			//console.log(body.meetings[x]._links.races);
			meetings.push(body.meetings[x]._links.races);
		}
		console.log(meetings);
	}
});
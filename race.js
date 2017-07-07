
var request = require('request');
var url = 'https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2017-07-01/meetings/R/CAU/races/2?jurisdiction=VIC';
//var races = [];

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Error');
	} else {
		console.log(body.raceNumber+" "+body.raceName)
		console.log(body.raceStartTime);
		console.log(body.ratings[0].ratingRunnerNumbers);
		console.log(body.results);
		console.log('Trifecta Pool $'+ body.pools[5].poolTotal);
		console.log('Trifecta $'+ body.dividends[5].poolDividends[0].amount);
	}
});
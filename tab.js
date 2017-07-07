// tab.js
// ========
var request = require('request');
var moment = require('moment');

module.exports = {
  dates: function (jurisdiction,dateName, callback) {
    var jurisdiction = typeof jurisdiction !== 'undefined' ? jurisdiction : 'today';
	var dateName = typeof dateName  !== 'undefined' ? dateName : 'today';

	var url = 'https://api.beta.tab.com.au/v1/tab-info-service/racing/dates?jurisdiction='+jurisdiction;
	//var data = getJson(url);
    getJson(url, function (body) {
    	
    	for(x=0;x<body.dates.length;x++){
			//console.log(body.dates[x].dateName);
			if(body.dates[x].dateName == dateName){
				//console.log(body.dates[x]._links.meetings);
				return callback(body.dates[x]._links.meetings);
			}
		}
    	//return callback(body);
    });
    //return data;
  },
  meetings: function (url, callback) {
    var meetings = [];
    getJson(url, function(body){
    	for(x=0;x<body.meetings.length;x++){
			//console.log(body.meetings[x]._links.races);
			if(typeof body.meetings[x]._links != 'undefined'){
				meetings.push(body.meetings[x]._links.races);
			}
		}
		//console.log(meetings);
		return callback(meetings);
    });
  },
  races: function (url, callback) {
    var races = [];
    getJson(url, function(body){
    	for(x=0;x<body.races.length;x++){
			//console.log(body.meetings[x]._links.races);
			races.push(body.races[x]._links.self);
		}
		return callback(races);
    });
  },
  race: function (url, val, callback) {
    
    getJson(url, function(body){
    	if(val == 'nil'){
    		body["_self"] = url
    		return callback(body);
    	}else{
    		return callback(eval('body.'+val));
    	}
    });
  },
  dateFormat: function(days,callback){
  	callback(moment().add(days, 'days').format('YYYY-MM-DD'));
  }
};

var getJson = function (url, callback) {
	
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			//callback();;
			console.log("FAIL:", url);
		} else {
			callback(body);
		}
	});
	
}
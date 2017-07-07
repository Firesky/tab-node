//schedule.js

//var schedule = require('node-schedule');
console.log('Job Started');

//var j = schedule.scheduleJob('/60 * * * * *', function(){
//	console.log('Run '+Date());
//});

setInterval(function(){
	console.log('Run '+Date());
}, 10000);
//schedule.js

var schedule = require('node-schedule');
console.log('Job Started');

//var date = new Date(Date.UTC(2017, 06, 11, 29, 50, 0, 0));*/
var date = new Date('2017-07-11T20:48:00+10:00');


console.log(typeof date)

var j = schedule.scheduleJob(date, function(){
	console.log('Run schedule '+Date());
});

/*console.log(typeof Date())
console.log(Date())

var j = schedule.scheduleJob('30 * * * * *', function(){
	console.log('Run 1 ');
});*/

var k = schedule.scheduleJob('30 * * * * *', function(){
	console.log('Run 2 '+Date());
});

/*setInterval(function(){
	console.log('Run '+Date());
}, 10000);*/



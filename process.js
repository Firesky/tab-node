//process.js

var schedule = require('node-schedule');
console.log('Process Started');
var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.Y9rBuJgUGquda7OdaOKmaExYyVYipITf');

pusher.devices(function(error, response) {
    console.log('Push Bullet Started'); 
});

var k = schedule.scheduleJob('0 0 13 * * *', function(){
	console.log('Process Run '+Date());
	var deviceParams = 'luke@firesky.com.au';
	var noteTitle = "1pm rocess has run!";
	var noteBody = "Process Run"; 

	pusher.note(deviceParams, noteTitle, noteBody, function(error, response) {
		if(error){
			console.log('Message Failed')
		}else{
			console.log('Message Sent');
		}    
	});

});
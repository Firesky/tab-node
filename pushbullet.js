//pushbullet.js

var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.Y9rBuJgUGquda7OdaOKmaExYyVYipITf');
 
pusher.devices(function(error, response) {
    console.log(response); 
});
 
var deviceParams = 'luke@firesky.com.au';
var noteTitle = "Pay attention to this, it is important!";
var noteBody = "This is from Node"; 

pusher.note(deviceParams, noteTitle, noteBody, function(error, response) {
    console.log(response);  
});
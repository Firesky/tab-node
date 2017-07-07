//clicksend.js
var clicksend = require('clicksend');


var controller = clicksend.SMSController;
//console.log(controller);
var sms =  {
        "messages":[
            {
                "source":"nodejs",
                "from":"Cliftopher",
                "body":"Wendle is not a real name.",
                "to":"+61417302307",
                //"schedule":1436874701,
                //"custom_string":"this is a test"
            }
        ]
    }


controller.sendSms(sms, function(error, response, context){
	if(error){
		console.log(error);
	}else{
		console.log(response);
		//console.log(context);
	}
});
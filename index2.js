var AWS = require('aws-sdk');
var tab = require('./tab');

AWS.config.loadFromPath('./config.json');
//ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
var ddb = new AWS.DynamoDB.DocumentClient()

/*var params = {
	  TableName: 'TAB-Races',
	  Key:{
        'RACE_ID' : '2017-07-01-NSW-GDI-R-5'
        
      }
	};

ddb.get(params, function(err, data) {
	if (err) {
	    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
	} else {
	    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
	}
});*/

var params = {
    TableName : "TAB-Races",
    //ConditionExpression: "raceType = :rt",
    ProjectionExpression: "raceType, RACE_ID",
    FilterExpression: "raceType = :rt",
    ExpressionAttributeValues: {
        ":rt":"G"
    }
};

ddb.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        console.log(data);
        /*data.Items.forEach(function(movie) {
           console.log(
                movie.year + ": ",
                movie.title, "- rating:", movie.info.rating);
        });

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }*/
    }
}

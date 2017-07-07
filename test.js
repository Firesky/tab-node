var b = [];
b.push(5)
b.push(8)
b.push(2)
b.push(1)
var r = [ [ 5 ], [ 2 ], [ 1 ], [ 4 ] ];
var bt = 'trifecta';
//res = win(bt,b,r);

var t = [];
t.push(1)
t.push(4)
t.push(3)

console.log(inc_tracker(t, 4));
//console.log(box(b, 3))



function box(arr,len){
	var tracker = new Array(len);
	var box =[];
	var count = 1;
	for(x=0;x<len;x++){
		tracker[x] = x+1;
	}
	//console.log(tracker);
	while(tracker[0]<arr.length && count <50){	
		/*var temp = [];
		for(x=0;x<len;x++){
			temp[x] = arr[tracker[x]];
		}
		box.push(temp);*/
		console.log(tracker);
		tracker = inc_tracker(tracker, 4);
		console.log(count++)

	}
	return box;
}

function inc_tracker(tracker, len){
	var newTracker = new Array(tracker.length);
	//newTracker = tracker;
	var changed = 0;
	for(x=tracker.length-1;x>=0;x--){
		if(!changed){
			if(tracker[x]<len){
				newTracker[x] = tracker[x]+1
				changed = x;
			}
		}else{
			newTracker[x] = tracker[x];
		}
		//console.log("X:"+x+" Done:"+done);
		//console.log(newTracker)
	}
	console.log("L1:"+newTracker)
	var done =0;
	var next = newTracker[changed];
	for(x=changed;x<tracker.length;x++){
		console.log("Changed:"+changed);
		console.log("First Duplicate:"+newTracker.indexOf(newTracker[x]));
		console.log("Current Val:"+newTracker[x]);
		console.log('----');
		while(!done){
			if((newTracker.indexOf(newTracker[x])>-1 && newTracker.indexOf(newTracker[x])<x) || newTracker[x] == undefined){
				newTracker[x] = next
				//console.log()
			}else{
				done = 1;
			}
			//console.log("N:"+next)
			next = next<len?next+1:1;		
		}
		done =0;
		next =1;
	}
	console.log("L2:"+newTracker)
	return newTracker;
}


/*function box(arr, len, start, result){
	//console.log(arr+" "+len+" "+start+" "+result)
	if(len == 0){
		console.log(result)
		return;
	}
	for(i=start;i<=arr.length-len;i++){
		result[result.length - len] = arr[i];
		//console.log(arr+" "+len+" "+start+" "+result)
		box(arr, len-1, i+1, result)
	}
}*/

/*static void combinations2(String[] arr, int len, int startPosition, String[] result){
        if (len == 0){
            System.out.println(Arrays.toString(result));
            return;
        }       
        for (int i = startPosition; i <= arr.length-len; i++){
            result[result.length - len] = arr[i];
            combinations2(arr, len-1, i+1, result);
        }
    } 

/*function box(choices) {
	//console.log("Choices: "+choices+" "+choices.length);
	console.log()
    var fn = function(active, rest, a) {
    	//console.log("Active: "+active+" Rest: "+rest+" A: "+a);
    	//console.log(typeof rest)
    	var count =0
        if (active.length==0 && rest.length==0){
        	console.log("1 Active: "+active+" Rest: "+rest+" A: "+a);
            return;
        }
        	
        if (rest.length == 0 ) {
        	console.log("Push: "+active);
        	//console.log(Object.getOwnPropertyNames(a));

            a.push(active);
            console.log(a.length)

        } else {
        	console.log("2 Active: "+active+" Rest: "+rest+" A: "+a);
        	//console.log(Object.getOwnPropertyNames(a))
            //console.log(rest[0]+ " "+ !rest); 
            //fn(active+ rest[0] , rest.slice(1), a);
            var b = a;
            b.push(rest[0]); 
            fn(b , rest.slice(1), a);
            //fn(active, rest.slice(1), a);
        }
        //console.log("Active: "+active+" Rest: "+rest+" A: "+a);
        return a;
    }
    return fn([], choices, []);
}*/



/*function win(bettype, bet, results){
	var res = {};
	res.correct = 0;
	//res.bettype = bettype;
	var places = 0;
	
	switch(bettype){
		case "win":
			res.creq = 1;
			places = 1;
			break;
		case "place":
			res.creq = 1;
			places = 3;
			break;
		case "quinella":
			res.creq = 2;
			places = 2;
			break;
		case "duet":
			res.creq = 2;
			places = 3;
			break;
		case "trifecta":
			places = 3;
			res.creq = 3;
			break;
		case "first4":
			res.creq = 4;
			places = 4;
			break;
		default:
			console.log('Error');
	}
	//console.log(results);
	//console.log(bet);
	//console.log(places);

	for(x=0;x<places;x++){
		console.log(results[x][0]+" "+bet.indexOf(results[x][0]));
		if(bet.indexOf(results[x][0])>=0){
			res.correct++;
		}
	}
	res.win = res.correct>=res.creq ? 1:0;
	return res;
}*/





/*
var moment = require('moment');
console.log(moment().add(-1, 'days').format('YYYY-MM-DD'));
*/
//console.log(new Date());


//file.js

var jsonfile = require('jsonfile')
var file = 'test.json'
jsonfile.readFile(file, function(err, obj) {
	if(err){
			console.log(err);
	}else{
		console.dir(obj)
		obj.No = 2
		obj.Yes = 4

		jsonfile.writeFile(file, obj, function (err) {
  			console.error(err)
		})
	}
  
})



/*
var read = require('read-file');
 
// async 
read('db.js', function(err, buffer) {
  //=> <Buffer 74 68 69 73 20 69 73 20 66 6f 6f>
  if(err){
			console.log(err);
	}else{
		console.dir(buffer)
	} 
});
 
// sync 
//var buffer = read.sync('foo.txt');*/
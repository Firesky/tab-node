//query.js
var jsonQuery = require('json-query')
 
var data = {
  people: [
    {	name: 'Matt',
    	country: 'NZ'
    },
    {
    	name: 'Pete',
    	country: 'AU'
    },
    {
    	name: 'Mikey', 
    	country: 'NZ'
    }
  ]
}
 
var test = jsonQuery('lookup['Matt']', {
  data: data
}) //=> {value: 'Matt', parents: [...], key: 0} ... etc 

console.log(test)

/*var rsj = require('read-search-json');

rsj.readJSON(data,'Matt',function(data,err){
    if(data)
        console.log(data);
    if(err)
        console.log(err);
})*/
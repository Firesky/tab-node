//traverse.js

//var traverse = require('traverse');
 
var obj = {
    a : [1,2,3],
    b : 4,
    c : [5,6],
    d : { e : [7,8], f : 9 },
};
 
/*var leaves = traverse(obj).reduce(function (acc, x) {
    if (this.isLeaf) acc.push(x);
    return acc;

}, []);
 
//console.dir(leaves);

 
var obj = { a : 1, b : 2, c : [ 3, 4 ] };
//obj.c.push(obj);
 
var scrubbed = traverse(obj).map(function (x) {
    //if (this.circular) this.remove()
    console.log(x)
});*/
//console.dir(scrubbed);

 var traverse = require('traverse-async').traverse;
 
 traverse(obj, function(node, next){
        //console.log("Current node", node);
        if(this.key == 'f'){
        	console.log(this.node)
        }
        //console.log(this.key == 'f'? this.node: "");
        next();
 });


    /*, function(newObj) {
        //console.log("Done!");
        //console.log(newObj)
    });*/
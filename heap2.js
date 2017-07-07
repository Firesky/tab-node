var swap = function (array, pos1, pos2) {
	var temp = array[pos1];
	array[pos1] = array[pos2];
	array[pos2] = temp;
};

var heapsPermute = function (array, n) {
	//n = n || array.length; // set n default to array.length
	if (n === 1) {
			//output(array);
			console.log(array.slice(0,3));
			//console.log(z++);
		} else {
			//console.log(n+" "+array);
			for (var i = 1; i <= n; i += 1) {
				heapsPermute(array, n - 1);
				if (n % 2) {
					var j = 1;
				} else {
					var j = i;
			}
			swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
		}
	}
};
// For testing:
var print = function(input){
	console.log(input);
}
var z =1;
heapsPermute(['a', 'b', 'c', 'd'], 4);
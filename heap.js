//heap.js
/*procedure generate(n : integer, A : array of any)
if n = 1 then output(A) 
	else 
		for i := 0; i < n - 1; i += 1 do 
			generate(n - 1, A) 
		if n is even then swap(A[i], A[n-1]) 
			else swap(A[0], A[n-1]) end if 
		end for 
	generate(n - 1, A)
end if*/

var b = [];
b.push('1')
b.push('2')
b.push('3')
b.push('4')
b.push('5')
//b.push('7')
//b.push('8')
//b.push('9')
//b.push('10')

var z = 1;
//heap(b.length, b, 5)

//console.log(123224%2)
//console.log(swap(b,0,1))

function heap(n, A, l){
	//console.log(n+" "+A);
	if(n==1){
		console.log(A, z++);
	}else{
		//console.log(n)
		for(var i=1;i<=n;i+=1){
			heap(n-1,A,l);
			if(n % 2){
				A = swap(A,i,n-1);	
			}else{
				A = swap(A,0,n-1);
			}
		}
		//heap(n-1,A);
	}
}

function swap(arr,a,b){
	//console.log(a,b)
	var x = arr[a];
	arr[a] = arr[b];
	arr[b] = x;
	return arr;
}

comb = require('js-combinatorics');
//cmb = comb.combination(b,3);
//cmb = comb.permutationCombination(b,3);
cmb = comb.permutation(b,3);
count = 1
while(a=cmb.next()){
	//heap(a.length, a, 3)
	console.log(a, count++);
} 
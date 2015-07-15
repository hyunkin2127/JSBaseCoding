/**
 * Created by Heon on 15. 4. 7.
 */


//배열 기반 힙
function Heap(type){
	this.arr = [];
	this.heap_type = type;
}


//최소 힙
//left, right찾기
/**
 * 1)자기 위치 찾아주는 함수
 * 2)insert, delete
 * 3)heapify
 * 4)
 *
 */

Heap.prototype.left = function(idx){
	var idx = idx*2+1;
	console.log("in left : "+idx + ' // lenght : '+this.arr.length)
	if(idx > this.arr.length)	return false;
	else 	return idx;
}

Heap.prototype.right = function(idx){
	var idx = idx*2+2
	console.log("in right : "+idx + ' // lenght : '+this.arr.length)
	if(idx > this.arr.length) return false;
	else return idx;
}

Heap.prototype.percolate = function(idx){
	var idx = idx || 0
		, left = this.left(idx)
		, right = this.right(idx)
		, max
		, temp;

	console.log("left : "+ left);
	console.log("right : "+ right);
	if(left && this.arr[left] > this.arr[idx]) max = left;
	else max = idx;
	console.log(22)

	if(right && this.arr[right] > this.arr[max]) max = right;
	console.log(33)

	if(max != idx){
		console.log(44)
		temp = this.arr[idx];
		this.arr[idx] = this.arr[max];
		this.arr[max] = temp;
		this.percolate(max);
}
}


Heap.prototype.insert = function(data){
	if(this.arr.length == 0){
		this.arr[0]=data;
		return;
	}

	var i;
	var isLeft;
	for( i=0; i<this.arr.length ; i++){
//		console.log(1);
		if(!this.arr[i*2+1]){
//			console.log(2);
			this.arr[i*2+1] = data;
			isLeft = true;
			break;
		}
		else if(!this.arr[i*2+2]){
//			console.log(3);
			this.arr[i*2+2] = data;
			isLeft = false;
			break;
		}
	}
	this.percolate();

}

var A = [];
function test(n){
	if(n<1)
		console.log(A)
	else {
		A[n-1] = 0;
		test(n-1);
		A[n-1] = 1;
		test(n-1);
	}
}

test(10);

console.log([5].length);

var h = new Heap("min");

h.arr = [5, 4, 3, 2, 1];
h.arr.reverse();
h.percolate(0);
console.log(h)
/**
 * Created by Heon on 15. 4. 1.
 */
/**
 * 1) BinaryTree
 */
var Queue = require('./queue.js');

//console.log(Queue)  // ===[Function: CircularQueue];
//var q = new Queue();
//console.log(q);
//
//q.enQueue(10);
//console.log(q.deQueue(10));

function BinaryTreeNode(data){
	this.data = data;
	this.pNode = null;
	this.cLeft = null;
	this.cRight = null;
}

function BinaryTree(node){
	this.root = node;
	this.lastReaf = node;
	this.length = 1;
}

BinaryTreeNode.prototype.isFull = function(){

}

//노드를 삽입할 경우 대소비교를 해서 넣어야하는가? --> 이진 탐색트리임//
BinaryTree.prototype.insertNode = function(data){
	var node = new BinaryTreeNode(data);

	this.InorderTraver(node);


}

BinaryTree.prototype.InorderTraver = function(node){
	if(node == null || node == undefined){
		return 0;
	}

	a = this.InorderTraver(node.cLeft);
	if(a == null || a == undefined) return 1;

	b = this.InorderTraver(node.cRight);
	if(b == null || b == undefined) return -1;

}

BinaryTree.prototype.InorderTraver = function(node){

	this.InorderTraver(node.cLeft);
	console.log(node.data);
	this.InorderTraver(node.cRight);
}

BinaryTree.prototype.InorderTraver = function(node){

	this.InorderTraver(node.cLeft);
	console.log(node.data);
	this.InorderTraver(node.cRight);
}

//순회하면서 값을 임시로 저장하고, 이를 비교
BinaryTree.prototype.FindMax = function(node){


	var a = new Array(3);

	a[0] = this.FindMax(node.left);
	a[1] = node.data;
	a[2] = this.FindMax(node.right);

	return a.max;
}



// 트리에서 필요한것  실제 길이 ? 데이터 위치
function ArrayTree(tArray){
	this.repository = tArray || [null];
	this.length = 0;
	this.max = 0;
	this.temp = [];

}

ArrayTree.prototype.isEmpty = function(){
		return (this.length ==0)
}

ArrayTree.prototype.insert = function(data){
	this.repository.push(data);
	this.length++;
}

//중간에 있는걸 빼면 자동으로 재배치 됨? -- > 재배치됨
//당겨지는거면 트리구조 전체가 흐트러질수 있는것 아닌가
//안당겨질경우 다음 삽입시 어떻게 되는가
ArrayTree.prototype.pop = function(){
	this.length--;
	return this.repository.pop();
}

ArrayTree.prototype.peek = function(){
	return this.repository[this.length];
}

ArrayTree.prototype.findMax = function(){
// tempArr 에 this.repository의 참조가 저장되는것으로 보임.
// 따라서 tempArr를 정렬하면 this.repository가 정렬됨
// 직접 대소비교를 통해 새로운 배열을 만들어야 할 듯
//	var tempArr = this.repository;
//	tempArr.sort();
//	return tempArr[tempArr.length-2];

	var temp  = this.repository[0];
	for(var i = 1; i<this.repository.length ; i++){
		if(temp < this.repository[i]) temp = this.repository[i];
	}
	return temp;
}

ArrayTree.prototype.findMin = function(){

	var temp  = this.repository[1];
	for(var i = 1; i<this.repository.length ; i++){
		if(temp > this.repository[i]) temp = this.repository[i];
	}
	return temp;

}

ArrayTree.prototype.Traverse = function(type){

	switch(type){
		case 1:
			this.frontTraverse();
			break;
		case 2:
			this.middleTraverse();
			break;
		case 3:
			this.endTraverse();
			break;
	}
}

ArrayTree.prototype.frontTraverse = function(idx){
	// var를 붙이지 않으면 전역변수로 선언되어  pidx가 계속 유지됨. 그래서 값이 계속 커짐
	pidx = idx || 1;

	if(this.isEmpty()){
		console.log('Tree is Empty');
		return;
	}
	if(!this.repository[pidx]){
		console.log('Idx is Empty :' +pidx);
		return ;
	}

	this.frontTraverse(pidx*2);
	console.log(this.repository[pidx]);
	this.frontTraverse(pidx*2+1);

}

ArrayTree.prototype.findMaxByRecur = function(idx){
	if(this.isEmpty()){
		console.log('Tree is Empty');
		return;
	}

	if(!this.repository[idx]){
		return;
	}

	if(this.max< this.repository[idx])
		this.max = this.repository[idx];

	this.findMaxByRecur(idx*2)
	this.findMaxByRecur(idx*2+1);

	return this.max;
}

ArrayTree.prototype.search = function(data, idx){
	if(this.isEmpty()){
		console.log('Tree is Empty');
		return;
	}

	var pidx = idx || 1;

	if(!this.repository[pidx]){
		console.log('idx is Empty :' + pidx);
		return;
	}

	if(this.repository[pidx] == data){
		console.log("idx : "+pidx)
		this.temp.push(pidx);
	}
	this.search(data, pidx*2);
	this.search(data, pidx*2+1);

	return this.temp;
}


//idx 없으면 root - leaf 높이, idx 넣으면 해당 노드 - leaf 높이
ArrayTree.prototype.checkDepth = function(idx){
	if(this.isEmpty()){
		console.log('Tree is Empty');
		return;
	}
	var depth = 0;
	var pidx = idx || 1;

	if(!this.repository[pidx]) return 0;

	while(this.repository[pidx]){
		pidx *=2;
		depth++;
	}

	return depth;

}

ArrayTree.prototype.checkSameStructure = function(t, idx){
	console.log("11111 "+this.isEmpty())
	console.log("2222 "+t.isEmpty());

//	if(this.isEmpty() ^ t.isEmpty()) return false;

	var pidx = idx || 1;
	if(!this.repository[pidx]) {
		console.log("111111111111")
		return;
	}
//	console.log(pidx)
//	console.log(this.repository, t.repository)
	if(this.repository[pidx] ^ t.repository[pidx]) return false;
	this.checkSameStructure(t, idx*2);
	this.checkSameStructure(t, idx*2+1);
}

//
//
var tree = new ArrayTree();
var tree2 = new ArrayTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);
tree.insert(80);
tree.insert(90);

tree2.insert(10);
tree2.insert(20);
tree2.insert(30);
tree2.insert(40);
tree2.insert(50);
tree2.insert(60);
tree2.insert(70);
tree2.insert(80);
tree2.insert(90);
tree2.insert(100);

//console.log(tree, tree2)

console.log(tree.checkSameStructure(tree2));
//console.log(tree.checkDepth(3));
////tree.frontTraverse();
//console.log(tree.findMax());
//console.log(tree.findMin());
//console.log(tree.findMaxByRecur(1));
//console.log(tree.search(50))

//tree.printReverse();

var a = null;
var b = false;
var c = true;
var d = undefined;

if(a ^ b) console.log("1111")
if(b ^ c) console.log("2222")
if(c ^ d) console.log("3333")
if(d ^ a) console.log("4444")
if(d ^ b) console.log("5555")
if(c ^ a) console.log("6666")















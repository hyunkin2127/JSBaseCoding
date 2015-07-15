//module.exports = Connection;
//Util.inherits(Connection, EventEmitter);
//function Connection(options) {
//	EventEmitter.call(this);


// var FunctionName을 제거하면 prototype에서 인식을 못함
// module.exports가 extern 역할
// 한개의 파일에 하나의 생성자만 담도록 할것.
// 여러개 담아도 방법있는것 같은데 확인필요함
var CircularQueue =  module.exports = function(size){
	this.front = -1;
	this.end = -1;
	this.size = size;
	this.qArray = new Array();
}

CircularQueue.prototype.isEmpty = function(){
	return (this.front == -1);
}

CircularQueue.prototype.isFull = function(){
	return ((this.end+1) % this.size == this.front);
}

CircularQueue.prototype.enQueue = function(data){
	if(this.isFull()){
		console.log("Queue is Full");
		return;
	}
	this.end = (this.end+1) % this.size
	this.qArray[this.end] = data;
	if(this.front == -1)
		this.front = this.end;
}

CircularQueue.prototype.deQueue = function(){
	if(this.isEmpty()){
		console.log("Queue is Empty");
		return;
	}
	var data = this.qArray[this.front];
	if(this.end == this.front){
		this.end = this.front = -1;
	}
	else{
		this.front = (this.front+1) % this.size;

	}
	return data;
}



//var a = new CircularQueue(10);
//
//
//a.enQueue(1);
//a.enQueue(2);
//a.enQueue(3);
//a.enQueue(4);
//
//console.log(a);
//console.log(a.isFull());
//console.log(a.isEmpty());
//
//console.log(a.deQueue());
//console.log(a.deQueue());
//console.log(a.deQueue());
//console.log(a.deQueue());
//console.log(a);
//
//
//var Stack = exports.module = function(){
//	this.Q1 = new CircularQueue(10);
//	this.Q2 = new CircularQueue(10);
//}
//
//
////exports.Stack = Stack = function(){
////  this.Q1 = new CircularQueue(10);
////  this.Q2 = new CircularQueue(10);
////}
//
//Stack.prototype.push = function(data){
//	if(this.Q1.isFull() && this.Q2.isFull()){
//		console.log("Stack is full");
//		return;
//	}
//
//	if(this.Q1.isEmpty()) this.Q2.enQueue(data);
//	else  this.Q1.enQueue(data);
//}
//
//
//Stack.prototype.pop = function(){
//	if(this.Q1.isEmpty() && this.Q2.isEmpty()){
//		console.log("Stack is Empty");
//		return;
//		console.log(1);
//	}
//	if(this.Q1.isEmpty()){
//		console.log(2);
//		while(this.Q2.front % this.Q2.size != this.Q2.end){
//			this.Q1.enQueue(this.Q2.deQueue());
//		}
//		return this.Q2.deQueue();
//	}
//	else if(this.Q2.isEmpty()){
//		console.log(3);
//		while(this.Q1.front % this.Q1.size != this.Q1.end){
//			this.Q2.enQueue(this.Q1.deQueue());
//		}
//		return this.Q1.deQueue();
//	}
//}
//
////var stack = new Stack();
////stack.push(100);
////stack.push(200);
////stack.push(300);
////stack.push(400);
////stack.push(500);
////console.log(stack);
////
////
////console.log(stack.pop());
////console.log(stack);
////
////console.log(stack.pop());
////console.log(stack);
////
////console.log(stack.pop());
////console.log(stack);
////
////console.log(stack);
////
////console.log(stack.pop());
////console.log(stack);
////console.log(stack.pop());
////


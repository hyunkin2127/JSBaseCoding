/**
 * Created by Heon on 15. 3. 28.
 */

/**
 * Data Structure Implementation
 * 1) LinkedList
 * 2) Stack
 * 3) Queue
 * 4) Tree
 * 5) Heap
*/


//1)linkedList
//1.Using Array

function Node(data, next){
  this.data = data;
  this.next = next;
}

function ListArray(len){
  this.array = new Array[len];
  this.length = 0;

}

ListArray.prototype.isEmptyList = function(){
  if(this.length == 0) return true;
  else return false;
}

//ListArray.prototype.insertNode = function(data, pos){
//  var self = this;
//  if(self.array.length <= self.length){
//    console.log("Array is Full!!! Stop insert");
//    return;
//  }
//
//
//  var node = new Node(data, null);
//
//  if(self.isEmptyList())
//    this.array[0] = node;
//
//  else if(pos ==1){
//    var tempArray = new Array(self.array.length);
//    for(var i =0 ; i<self.array.length ; i++){
//      tempArray[i+1]= self.array[i];
//    };
//  }
//  else{
//    var tempArray = new Array(self.array.length);
//    for(var i = 0; i<self.array.length ; i++){
//      if(i+1 == pos){
//        tempArray[i] =
//      }
//
//      tempArray[i]= self.array[i];
//
//    }
//  }
//
//
//
//};

function myArrayStack(capacity){
  this.top = -1;
  this.stackArray = new Array(capacity);
}

myArrayStack.prototype.isEmptyStack = function(){
  if(this.top == -1) return true;
  else false;
}

myArrayStack.prototype.isFullStack = function(){
  if(this.top+1 == this.capacity) return true;
  else false;
}

myArrayStack.prototype.push = function(data){
  if(this.isFullStack()) {
    console.log("Stack is Full");
    return;
  }
  this.stackArray[++this.top] = data;
}

myArrayStack.prototype.pop = function(){
  if(this.isEmptyStack()) {
    console.log("Stack is Empty");
    return;
  }
  return this.stackArray[this.top--];
}

myArrayStack.prototype.deleteAll = function(Stack){

 Stack.free();

}


function myLLStack(){
  this.top = -1;
}

myLLStack.prototype.isEmptyStack = function(){
  if(this.top == -1 ) return true;
  else return false;
}

myLLStack.prototype.push = function(data){
  var node = new Node(data, this.top);
  this.top = node;

}

myLLStack.prototype.pop = function(){
  if(this.isEmptyStack()){
    console.log("Stack is Empty");
    return;
  }
  console.log(this.top.data);
  console.log(this.top.next);

//  var temp = this.top;
//  this.top = this.top.next;
//  return temp;

  //this.top을 리턴하고, top에 다음 노드의 주소를 저장함. --> 주소가 저장되는건지 노드자체가 저장되는건지 확인이 필요함
  return this.top = this.top.next;

}

var a = [ 1, 2, 3, 4,5 ];

console.log("11 "+a.splice(0, 2))
//console.log("22 "+a.slice(0))
//console.log("22 "+a.slice(1))
//console.log("22 "+a.slice(2))
//console.log("22 "+a.slice(3))
//console.log("22 "+a.slice(4))


//var stack = new myLLStack();
//
//stack.push(1);
//stack.push(2);
//stack.push(3);
//stack.push(4);
//stack.push(5);
//
//console.log(
//  stack.pop() +" "+
//  stack.pop() +" "+
//  stack.pop() +" "+
//  stack.pop() +" "+
//  stack.pop()
//)
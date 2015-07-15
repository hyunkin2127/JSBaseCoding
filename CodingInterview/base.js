/**
 * Created by Heon on 15. 4. 18.
 */
console.log("-------------------- EA 문제1")
var funct10 = function(){
	var a = 5;

	return function(){
		a+=10;

		return a;
	}
}
var test = funct10();
console.log(test());

console.log("-------------------- EA 문제2");
var func3 = function(){
	var a =1;

	var func2 = function(){
		var b = a+2;

		return function(){
			b+=10;

			return b;
		}
	}
	return func2;
}
var testEA = func3();
console.log(testEA()())

console.log("-------------------- EA 문제3");
var ab = 5;
function test1(){
	console.log(111, ab);

	ab=10;
	console.log(222, ab);

	var ab;
	console.log(333, ab);

	ab=3;
	console.log(444, ab);
}
test1();
//console.log(ab);
console.log(test1.name)
var test123 = func3();
console.log(123123, test123());

console.log("-------------------- 유효 범위1")
// 유효범위의 대상1
function testABC(){
	if(true){
		var abcd = 2011111;
	}
	console.log(abcd);
	return abcd;
}
console.log(testABC());
console.log("-------------------- 유효 범위2")
//유효범위의 대상2.
//var b = 20;
//var aa = {
//	test1 : 10,
//	test2 : b = 20123
//}
//for(var i = 0; i<10; i++){ var abc = 1;}
//console.log(abc);
//console.log(aa);
//console.log(b);

console.log("-------------------- 유효 범위3")
function qwer(){
	gh = 0;
}

/*for(var gh= 0; gh<5; gh++){
 qwer();
 console.log(gh);
 }*/

console.log("-------------------- Scope");
var vscope = 'global';
function fscope(){
	vscope = 'local1';
	console.log(1111, vscope);
}
fscope();
console.log(3333, vscope);

console.log("-------------------- Lexical & Dynamic Scope");
//정적 스코프와 동적 스코프
var q = 5;
function w(){ console.log("q:"+q)};
function e(){var q = 10; w();};
e();
console.log("--------------------")
function t(a,b){
	return a+b;
}

function t2(a ,b, c){
	return a*b*c;
}

function t3(func){
	console.log(123123, func);
}
console.log(123123, t3(t2(1,2,3)));
console.log("--------------------")

function test10(){}
var a = new test10();
console.log(a);
test10.prototype.name = 'heon';
console.log(test10);
console.log(a);
a = new test10();
console.log(a.prototype);
console.log("------------------- 객체 인자로서의 함수")
function cal(mode){
	var func = {
		plus : function(a,b){return a+b},
		minus : function(a,b){return a-b}
	};
	return func[mode];
}
console.log(cal('plus')(2,1));

console.log("------------------- Scope binding 예제 1")
var z=1;
var t;
function p() {
	var z=2;
	t=new Ouch(3);
	console.log(t.argh());
}
function Ouch(z) {
	this.argh = function() {
		return z;
	}
}
p();
console.log(t.argh());

console.log("------------------- Scope binding 예제 2")
//var k=1;
//var l;
//function q() {
//	var k=2;
//	l=new Zike(3);
//	console.log(l.argh()); // 3
//	l.zow(4);
//	console.log(l.argh()); //4
//	console.log(k); // 2
//}
//function Zike(k) {
//	this.argh = function() {
//		return k;
//	}
//	this.zow = function(c) {
//		k = c;
//	}
//}
//q();
//console.log(l.argh());4
//l.zow(5);
//console.log(l.argh());5
//console.log(k);1

console.log("------------------- Scope binding 예제 3")
function sum(){
	console.log(this);
//	var _sum = 0;
//	for (var name in this){
//		_sum+= this[name];
//	}
//	return _sum;
}

var zzzz = { qwe : 10, ert : 20};
console.log(bbbb.call(zzzz));
function bbbb(){
	return this;
}
console.log(this);

console.log("------------------- 정규표현식 예제1")
var regTest1 = "<html>안녕하세요</html>";
var pattern = /(<([^>]+)>)/ig;

var regTest2 = "abcd";
var pattern2 = /^(ab)(cd)$/;
console.log(regTest2.replace(pattern2, ""));


//var pattern2 = <(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>
var after = regTest1.replace(pattern, "");
console.log(after);

console.log("------------------- 객체 속의 함수 예제 1")
var obj = {
	qaz : { zxc : 10, xcv : 20, cvb : 30},
	wsx : function(){
		console.log(this.qaz)
	}
};

obj['wsx']();

console.log("------------------- 객체 속의 함수 예제 2");
function person5(){};

var p = new person5();

person5.prototype.name = 20;
person5.prototype.print = function(){console.log(person5.name)};

console.log(p.name);
p.print();
console.log(p.__proto__)

console.log("------------------- 상속 예제 1");
function Ultra(){
	this.ultraProp = 1;
	console.log("in Ultra", this.ultraProp)
}

//Ultra.ultraProp = 1;
Ultra.prototype.ultraProp = true;

function Super(){
	console.log("in Super", this.ultraProp)
}
Super.ultraProp = 5;
Super.prototype.ultraProp = 7;
Super.prototype = new Ultra();

console.log(123, new Super())

function Sub(){
	console.log("in Sub", this.ultraProp)
}
Sub.ultraProp = 10;
Sub.prototype = new Super()

var o = new Sub();
console.log(o.ultraProp);
console.log(o.__proto__);
console.log(o.constructor);

console.log("------------------- 상속 예제 2");
function Person(name) {
	this.name = name || "혁준";
}

Person.prototype.getName = function(){
	return this.name;
};

function Korean(name){
	Person.apply(this, arguments);
}
Korean.prototype = Person.prototype;

var kor1 = new Korean("혁준");
console.log(kor1.getName());  // 혁준

var kor2 = new Korean("지수");
console.log(kor2.__proto__);
console.log(kor2.getName());  // 혁준
console.log("-------------------반복문  조건문 예제");

function checkForLoop(){
	for(var i =-10; i++;){
		console.log(i);
	}

};

checkForLoop();
console.log("-------------------반복문  조건문 예제");
var a = 0.0;

console.log(isFinite('1/1'))
console.log(isNaN(a))
console.log("------------------- Curring 예제");

var testobj = {
	0 : 10,
	1 : 20,
	2 : 30
}

Function.prototype.curry = function() {
	var slice = Array.prototype.slice;
	var args = slice.apply(arguments);
	var that = this;

	var testobj = {
		0 : 10,
		1 : 20,
		2 : 30
	}

	console.log(slice.apply(testobj));
	console.log(arguments);
	console.log(args);

	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
}

var sum123 = function(a, b) {
	return a+b;
}

var sum1 = sum123.curry(1,10,50);
console.log(sum1(5))
//var eventuality = function(that){
//
//	var registry = {};
//
//	that.fire = function(event){
//		var array
//			, func
//			,	handler
//			,	i
//			, type = typeof event === 'string' ? event : event.type;
//
//		if(registry.hasOwnProperty(type)){
//			array = registry[type];
//			for(i = 0; i<array.length; i++){
//				handler = array[i];
//				func = handler.method;
//				if(typeof func === 'string') func = this[func];
//
//				func.apply(this, handler.parameters || [event]);
//			}
//		}
//		return this;
//	};
//
//	that.on = function(type, method, parameters){
//		var handler = {
//			method : method,
//			parameters : parameters
//		};
//		if(registry.hasOwnProperty(type)) registry[type].push(handler);
//		else registry[type] = [handler];
//		return this;
//	};
//
//	return that;
//}

console.log("------------------- Array Method 예제");

var arrayMethod = ['a', 'b', 'c', 'd'];

console.log(arrayMethod.slice(-10, 5));

console.log(typeof null);
console.log(typeof /a/);
console.log(typeof NaN);
console.log(NaN === NaN);
console.log(NaN !== NaN);
console.log(typeof arrayMethod.constructor)
console.log(1+parseInt(8))

console.log("------------------- Array Method 예제");
var funcThis = this;
function Func(){
	funcThis = this;
	}
var o1 = Func();
console.log(funcThis);
var o2 = new Func();
console.log(funcThis);

console.log("------------------- 생성자 함수 예제");
var createee = 50;
var CreateFunc = function(){
	var a = 10;
	this.b = 20;
	console.log(createee);
	return { b : a};
}
var created = new CreateFunc();
var uncreated = CreateFunc;
console.log(1,created);
console.log(2, uncreated());
console.log(3)




//sum();
//console.log(sum());

//console.log(11, removeChars(testString, 'm'))
//
//console.log(testString.substring(0,2)); // startIdx , endIdx
//console.log(testString);
//
//console.log(testString.substr(0,2)); // startIdx, length
//console.log(testString);
//
//var strArr = testString.split(' ');
//console.log(strArr);
//console.log(strArr.slice(1,2));
//console.log(strArr)
//var jsonTest = new Object();,
//
//jsonTest.name = "고현우";
//jsonTest.age = '27';
//jsonTest.gender = 'male';
//jsonTest.university = 'DK';
//
//console.log(jsonTest);
//console.log(JSON.stringify(jsonTest));
//
//var jst = JSON.stringify(jsonTest);
//
//console.log(jst.name);
//console.log(JSON.parse(jst));
//
//var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//
//console.log(arr.pop()); //pop(마지막 인자를 자름) 실행시 배열 자체가 영향을 받음
//console.log(arr.push('g')); //pop(마지막에 인자를 추가) 실행시 배열 자체가 영향을 받음 삽입후 배열 길이 반환
//console.log(arr); // f가 빠진 배열이 출력됨
//
//console.log(arr.shift());// shift(맨앞 인자를 자름) 실행시 배열자체가 영향을 받음
//console.log(arr.unshift('0'));// unshift(맨앞에 인자를 추가) 실행시 배열자체가 영향을 받음 삽입후 배열 길이 반환
//console.log(arr);// a, f가 빠진 배열이 출력됨
//
////arr.sort()
//console.log('================================')
//var a = [5,4,3,2,1];
//console.log(a.slice(2,3));           // [1,2,3]
//console.log(a.slice(3));              // [4,5]
//console.log(a.slice(1, -1));         // [2,3,4]
//console.log(a.slice(-3,-2));        // [3]
//console.log(a)
//console.log('=======')
////console.log(a.splice(1,0,5,7));
//console.log(a);
//console.log('=======')
//console.log(typeof a.join()); // (구분자) arr을 붙여서 문자열로
//console.log(a);
//console.log('=======')
//
//console.log(a.sort());
//
//var a = new Array("c", "a", "b");
//a.sort();
//var s = a.join(", ");     // s== "a, b, c"
//// 알파벳순이 아니라 다른 순서로 배열을 정렬하려면
//// sort() 메서드의 전달인자를 통해 비교 함수를 직접 명시해주어야 한다.
//// 비교 함수는 전달인자를 두개 받아서, 정렬된 배열 상에서
//// 어떤 것이 먼저 나타나야 하는지 판단하는데 사용 된다.
//// 만약 첫 번째 전달인자가 두 번째보다 먼저 나타나야 한다면 -->  오름차순일때
//// 비교 함수는 0보다 작은 숫자를 반환해야 한다.
//// 첫 번째 전달인자가 두 번째보다 뒤에 나타나야 한다면  --> 내림차순일때
//// 0보다 큰 숫자를 반환하며 두 값이 동등하다면 0을 반환해야 한다.
//var a = [33, 4, 1111, 222];
//a.sort();                   // 알파벳순 : 1111, 222, 33, 4
//a.sort(function(a,b) { // 번호순 : 4, 33, 222, 1111
//	return a-b;
//});
//
//// 자바스크립트에선 자체적으로 2차원 배열을 지원하지 않으므로
//// 1차원 배열안에 다시 배열을 할당하는 방식을 사용해야 함
//var arr = new Array ( new Array(10), new Array(10));
//console.log(arr);
//
//var arr2 = [];
//for(var i = 0; i<10; i++){
//	arr2[i]=[i];
//}
//
//arr2[0][1]=11;
//arr2[0][2]=9;
//arr2[0][3]=8;
//arr2[0][4]=7;
//arr2[0][5]=6;
//arr2[0][6]=5;
//
//console.log(arr2[0]);
//console.log(arr2[0].sort(function(a,b){
//	return b-a;
//}));
//




/**
 * Created by Heon on 15. 7. 15.
 * http://davidshariff.com/js-quiz/  :  Quiz01 - Quize19
 * http://perfectionkills.com/javascript-quiz/ : Quize20 -
 */

console.log("-------------------------- Quiz01");
var abc = function abc1() {
	console.log(abc === abc1);
};
abc(); // true
//abc1(); // error : abc1 으로 외부에서는 접근이 불가능함.

console.log("-------------------------- Quiz02");
function aaa() {
	return
	{
		test: 1
	};
}
//return문은 한줄로 이어져서 작성되어야 함.
console.log(typeof aaa());

console.log("-------------------------- Quiz03");

console.log("-------------------------- Quiz04");
console.log((true + false) > 2 + true); // true + false === 1 (number)
console.log(typeof (true+false))

console.log("-------------------------- Quiz05");
function bar05() {
//	var foo05; // return 보다 위에 위치하는 변수 foo05가  undefined 상태이면 함수 foo05를 반환
	var foo05 = {a : 10}; // 변수 foo05를 초기화했으면  변수 foo05를 반환
	foo05 = undefined // 만약 다음과 같이 변수 foo05에 명시적으로 undefined를 할당(초기화)했다면 변수를 반환
	function foo05() {}; // 같은 이름의 초기화된 변수가 있으면 거기에 먼저 접근하는것으로 보임 만약 초기화되지 않았다면 여기먼저
	return foo05;
}
console.log(typeof bar05());

function bar05_2() {
	return foo05;
	foo05 = 10;
	function foo05() {}
	// hoisting에 의해 변수 foo05와 함수 foo05가  둘다 선언된것으로 간주되지만
	// 함수는 자동으로할당까지 이루어지고, 변수는 할당부분에 가서야 할당이 이루어지기 때문에
	// 함수 foo05가 반환됨
	var foo05 = '11';
}
console.log(typeof bar05_2());

var a = {  b : function(){ console.log("func")}, b:10};
console.log(a.b) // 10 ==> b : 10 이 나중에 선언되어서
var a = { b:10,  b : function(){ console.log("func")}};
console.log(a.b) // function ==> 함수 b : func~~~ 가 나중에 선언되어서

console.log("-------------------------- Quiz06");
console.log("1" - - "1"); // 2 // -(-) === + 의 원리인듯.
console.log("12" / "3"); // 4 // 문자열화 되어있는 숫자도 연산 가능
console.log("1" +  +"1"); // + 연산자는 문자열간 연산으로 처리됨 ( 문자열 결합)

console.log("-------------------------- Quiz07");
var x07 = 3;
var foo07 = {
	x07: 2,
	baz07: {
		x07: 1,
		bar07: function() {
			return this.x07;
		}
	}
}
var go = foo07.baz07.bar07;
console.log(go()); // 3
console.log(foo07.baz07.bar07()); // 1

console.log("-------------------------- Quiz08");
console.log(new String("This is a string") instanceof String);
console.log(new String("This is a string") instanceof Object);

console.log("-------------------------- Quiz09");
console.log([1,2,3] + ['a','b','c']+'1'); // 1,2,3a,b,c1 // 배열의 요소 전체를 문자열로 간주(toString())하여 문자열 + 연산 적용
console.log([] + [] + 'foo'.split('')); // []+[] === "", 'foo'.split('') === ['f','o','o'];

console.log("-------------------------- Quiz10");
console.log(new Array(5).toString()); // ',,,,'

console.log("-------------------------- Quiz11");
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0; // arr.length를 원래 배열의 lenght보다 작은 값으로 설정하면 나머지 부분이 잘려나감
myArr.push('bin');
console.log(myArr); // ['bin']

console.log("-------------------------- Quiz12");
console.log(String('Hello') === 'Hello'); // true

console.log("-------------------------- Quiz13");
var t = 0;
function foo13() {
	t++;
	this.t = t;
	return foo13; // 생성자 함수가 다시 본인을 반환함
	// 생성자 함수가 객체, 배열, 함수를 반환할경우 이를 할당함
}
var bar = new new new new new foo13; // new 의 갯수가 중요한것이 아님
//bar에는 foo13(){} 함수가 할당되어 있음. 함수 foo13 안에는 t 가 직접 존재하지 않기때문에 undefined
// (this.t는 new 키워드를 통해 생성자함수로서 사용되었을경우 해당 객체에 포함됨)
console.log(bar.t); // undefined

console.log("-------------------------- Quiz14");
var str1 = new String("This is a String");
var str2 = "This is a String";
console.log(1, typeof str1); // object : new String("")으로 생성된 문자열은 객체 취급을 받는다
console.log(2, typeof str2); // string
console.log(3, str1 instanceof String); // true
console.log(4, str2 instanceof String); // false
console.log(5, str1 instanceof Object); // true
console.log(6, str2 instanceof Object); // false
console.log(str1.slice(0, 4), str2.slice(0, 4)) // 문자열 관련함수는 똑같이 적용됨
console.log(str1); // 문자열 형태가 아니라 문자 각각이 배열화 되어 저장된 객체
console.log(str2); // 문자열 형태로 저장되어있음

console.log("-------------------------- Quiz15");
//var bar15 = 1,
//	foo15 = {};
//
//foo15 =  {
//	bar15: 2,
//	baz15: ++bar15
//};
//console.log(foo15.baz15 + foo15.bar15 + bar15);

var bar15 = 1,
	foo15 = {};
// 객체에  foo15 : {}와 같이 : 연산자는 아무런 영향을 주지 못함  즉 아래 3줄은 무의미함
foo15: {
	bar15: 2;
	baz15: ++bar15;
};
//아래는 undefined + undefined + 1 임 따라서 NaN
console.log(foo15.baz15 + foo15.bar15 + bar15); // NaN

console.log("-------------------------- Quiz16");
var myArr16 = ['foo', 'bar', 'baz'];
myArr16[2]
console.log('2' in myArr16); // true
//prop in objectName
//A string or numeric expression representing a property name or array index.
//for in에서의 in 연산자와 같은 역할로 boolean값을 반환함

console.log("-------------------------- Quiz17");
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c'; // 배열도 하나의 객체로서 메서드나 속성을 추가할수 있다.
console.log(arr.length);// 그러나 length 속성에 영향을 주는것은 배열자체의 element 뿐임

console.log("-------------------------- Quiz18");
console.log( 10 > 9 > 8 === true);//false; 10>9 가 true를 반환하고  true>8 이 false 반환

console.log("-------------------------- Quiz19");
function foo19(a, b) {
	console.log(1,arguments);
	arguments[1] = 2; // 인덱스가 18번까지 확장
	arguments[2] = 2;
//	arguments[19] = 2; // 인덱스가 45번까지 확장
//	arguments[46] = 2; // 인덱스가 85번까지 확장
	console.log(2, b); // arguments[1]에 값을 할당하였으나  foo19(1)이므로 b에는 값이 할당되어 있지않음
	console.log(3, arguments);// 인덱스 값 할당에 다른 확장 원리???
}
foo19(1);

console.log("-------------------------- Quiz20");
console.log((function(x){
	delete x;
	return x;
})(1)); // 1

//delete 연산은 객체의 속성 혹은 배열의 요소를 제거하는데 사용할 수 있다,
//1. 삭제할수 없는것 : 변수, 객체, 함수 ==> delete 구문을 사용하면 오류없이 실행되지만 실제로 삭제되지는 않음.
var q = "qqqqq";
var w = { a : 10, b: 20};
function e(){};
delete q;
delete w;
delete e;
console.log(q, w, e); // 그대로 출력됨

//2. 객체의 속성삭제는 완전히 삭제되어 그 값이 남지않음
var asd = {
	a : 10,
	b: {c:10, d:20},
	e : function(){console.log("func");}};
console.log(asd);

delete asd.b; //객체의 속성이라면 그것이 객체나 함수여도 삭제가능
delete asd.e;
console.log(asd);

//3. 배열의 요소삭제는 값은 삭제되나 해당인덱스는 빈칸으로 남게된다.
var qwe = [1,2,3,4];
delete qwe[2]
console.log(qwe); // [1,2,,3,4]
console.log(qwe[2]); // undefined

console.log("-------------------------- Quiz21");
var x = 1	, x = y = typeof x; // var a = module.exports = function(){}와 같은 기능. x와 y에 둘다 typeof x가 할당된다.
console.log(x); // number

console.log("-------------------------- Quiz22");
console.log((function f(f){
	return typeof f();
})(function(){ return 1; })); // number

console.log("-------------------------- Quiz23");
var f23 = (
	function g(){ return 22; },
	function f(){ return "11"; }
	)();//늦게 선언된 함수가 실행됨
console.log(f23 , typeof f23)

console.log("-------------------------- Quiz24");
var x24 = 10;
if (function f24(){}) { // true.
	x24 += typeof f24;
}
console.log(x24);

console.log("-------------------------- Quiz25");
var x25 = [typeof x25, typeof y25][1];//익명함수같은 기능. 배열을 선언과 동시에 접근함
console.log(x25)
console.log(typeof typeof x25);

console.log("-------------------------- Quiz26");
console.log( // hoisting 원리에 대한 이해 필요.
	(function f(){
		function f(){ return 1; };
		return f();
		function f(){ return 2; };
	})()
	); // 2

console.log("-------------------------- Quiz28");
function f28(){ return f28; }
console.log(new f28());
console.log(new f28() instanceof f28);
console.log("-------------------------- Quiz20");










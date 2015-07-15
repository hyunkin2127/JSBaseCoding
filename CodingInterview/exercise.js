/**
 * Created by Heon on 15. 7. 8.
 */
console.log("------------------- Scope  예제 1");

var name = " AAAAA ";
var introduce = function(){
	var intro = " BBBBB ";
	if(false){
		var name = " CCCCC ";
	}
	console.log(name);
	return  intro += name;
}
console.log(introduce());


console.log("------------------- Scope  예제 2");
//console.log(myName() + " / ");
//var myName = "AAA";
function myName(){
	return "BBB";
}
console.log(delete myName);
//console.log(myName());
console.log(myName);


console.log("------------------- Scope  예제 3 // document 객체때문에 웹에서 ");
//(function(doc) {
//	console.log(new doc() === doc());
//	console.log(new doc() === document);
//	console.log(doc() === document);
//})
//(function arg() {
//	return document;
//})


console.log("------------------- Scope  예제 4");
function setter(aryUnits) {
	for(var i=0; i < aryUnits.length; i++) {
		var id = i + 1;
		aryUnits[i] = new Object();
		aryUnits[i].getId = function() {
			return id;
		}
	}
}
var ary = new Array(5);
setter(ary);
console.log(ary[3].getId());

console.log("------------------- Scope  예제 5");

function args() {
	return (typeof arguments) && (arguments instanceof Array);
}
console.log(args());

console.log("------------------- Scope  예제 6");

var c;
console.log(typeof typeof c);

console.log("------------------- Scope  예제 7");
var privacy = {
	secret: "I did not study last night.",
	getSecret : function() {
		return this.secret;
	}
};
var what = privacy.getSecret;
console.log(what());

console.log("------------------- Scope  예제 8");
function func1( ) { return func1; }
if(new func1() === func1()) {
	console.log("same!");
}
else {
	console.log("different!");
}


console.log("------------------- Scope  예제 9");
(function(){
	Object.prototype.scope = "prototype";

	(function(f) {
		var scope = "local";
		console.log(f());
	})(function checkScope() { return scope; });
	//인자로 전달된 checkScope는 function(f)의 영역밖에 존재한다.
	// 즉, 두 함수는 서로 전혀 연관되어 있지 않은 함수로 서로의 scope에 관계가 없다.
	// 따라서 scope라는 변수를 찾아가다가 Object.prototype에 scope라는 프로퍼티에 도달하여 그 값을 반환한다.

})();

console.log("------------------- Scope  예제 10");

var strZero = "0";
var numZero = 0;
var notNumer = NaN;
var strEmpty = '';
var tab = '\t';
var undef;
var nll = null;
if(strZero == true) {
	console.log("1");
}
if(notNumer == false) {
	console.log("2");
}
if(undef == nll) {
	console.log("3");
}
if(tab == 0) {
	console.log("4");
}
if(tab == true) {
	console.log("5");
}
if(strEmpty == numZero) {
	console.log("6");
}
if(false == 'false') {
	console.log("7");
}
if(strEmpty == numZero) {
	console.log("8");
}

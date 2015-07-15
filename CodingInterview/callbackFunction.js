/**
 * Created by Heon on 15. 7. 2.
 */
//객체를 생성합니다.
// 다른 함수의 콜백함수로 전달한 메서드를 정의합니다.

var clientData = {
	id: 094545,
	fullName: "Not Set",
	setUserName: function (firstName, lastName)  {
		console.log(this);
		this.fullName = firstName + " " + lastName;
		//메소드를 호출하면 객체와 this의 바인딩이 발생함
		//이와 같이 자신의 객체 정보를 this를 통해 얻는 메소드를 퍼블릭메소드라 한다.
	}
}

function getUserInput(firstName, lastName, callback)  {
	console.log("inGetUserInput : " + callback);
	if (typeof callback == 'function') callback (firstName, lastName);
}

getUserInput ("Barack", "Obama", clientData.setUserName);
//getUserInput에 전달되는 콜백함수는 메서드로서가 아니라 함수로서 자체 기능수행하는 역할을함
//따라서 clientData의 정보가 배제된 상태에서의 this는 전역객체를 가리킴.

function test(){
	clientData.setUserName('a', 'b'); // 여기에는 객체의 메서드로서 사용되었기 때문에 clientData.fullName 값이 변경됨.
}
test();

console.log(0, clientData.fullName);
console.log (1, clientData.fullName);// 값에 설정되지 않음
console.log (2, fullName); // fullName 프로퍼티가 전역객체의 인자로 세팅됨 :  Barack Obama

// 여기 아래에 같은 이름으로 함수를 선언하면 호이스팅에 의해서 덮어 씌워짐.
// 즉, 아래에 선언된 함수가 위의 함수를 덮어 쓴다.
//function getUserInput(firstName, lastName, callback, callbackObj)  {
//	callback.apply (callbackObj, [firstName, lastName]);	// apply함수는 callbackObj에 this객체를 매핑합니다.
//	//우리는 clientData.setUserName 메서드와 clientData 객체를 파라메터로 전달합니다.
//	//clientData객체는 Apply함수에의해 this 객체로 정의가 될 것입니다.  
//}
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
//console.log (3, clientData.fullName); // Barack Obama
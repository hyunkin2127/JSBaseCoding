/**
 * Created by Heon on 15. 7. 1.
 */

var testString = 'This apple is mine';
var i = testString.indexOf("apple",10);

console.log(testString[1])

//console.log(i);
//
//console.log(new Date())
//console.log(new Date().toUTCString())
//
//console.log(testString.substring(0,12)); // startIdx , endIdx
//console.log(testString.substr(0,12)); // startIdx, length
//
//var strArr = testString.split(' ');
//strArr.reverse();
//console.log(strArr.join(' '));

function parsingString(str, callback){
	var tempStr = '';
	var tempArr = [];
	for(var i= 0 ; i<= str.length ; i++){
		tempStr += str.charAt(i);
		if(str.charAt(i) ==' ' || i==str.length){
			tempArr[tempArr.length] = tempStr;
			tempStr ='';
		}
	}
//	return tempArr;
	if(typeof callback === 'function') callback(tempArr);
	else return tempArr;
}

function reverseArray(arr, callback){
	var tempArr = new Array(arr.length);
	for(var i = 0 ; i<arr.length ; i++){
		tempArr[tempArr.length -1 - i] = arr[i];
	}
//	return tempArr;
	if(typeof callback === 'function') callback(tempArr);
	else return tempArr;
}


function makeString(arr){
	var tempString = '';
	for(var i = 0 ; i<arr.length ; i++){
		tempString += arr[i];
	}
	return tempString;
}

console.log(makeString(reverseArray(parsingString(testString))))
console.log(111111111111, parsingString(testString, reverseArray));

//console.log(parsingString(testString))

function findNum(arr){
	var tempArr = new Array(parseInt(arr.length/2)+1);
	var hash;
	console.log("length :", tempArr.length)
	for(var i = 0; i<arr.length ; i++){
		hash = arr[i]%tempArr.length;  // hash 함수가 적절하지 않아서 cnt ==3이상인 경우가 많이 발생함.
		console.log(arr[i], hash);
		if(!tempArr[hash]){
			tempArr[hash] = {
				data : null,
				cnt : 0
			};
			tempArr[hash].data = arr[i];
			tempArr[hash].cnt = 1;
		}
		else{
			tempArr[hash].cnt++;
		}
	}
	return tempArr
}

var testArr = [ 0, 10, 23, 17 , 25, 19, 20, 24, 8, 9, 11,182, 45, 67, 0, 10, 23, 17 , 25, 19, 20, 24, 8, 9, 11, 45, 67, 1,1 ,2,2 ,3,3, 5,5, 6,6];

//console.log(findNum(testArr));

function findDuplicate(arr){
	// 해쉬테이블 형태로 만들면 되지 않을까
	var tempArr =[];
	var num;
	for(var i = 0; i<arr.length ; i++){
		num = arr[i]+" ";
		if(!tempArr[num]) 	tempArr[num] = 1;
		else tempArr[num]++;
	}
	for(var prop in tempArr){
		if(tempArr[prop]==1)
			return parseInt(prop);
	}
}

console.log(findDuplicate(testArr));


function findNonRepeatedChar(str){
	var i;
	var count = new Array(256);
	for( i = 0 ; i<count.length ; i++){
		count[i]=0;
	}
	for(i = 0; i<count.length; i++){
		count[str.charAt(i).charCodeAt()]++;
	}
	for(i=0; i<count.length;i++){
		if(count[str.charAt(i).charCodeAt()]==1){
			return str[i];
		}
	}
}


function findNonRepeatedChar2(str){
	var i;
	var cnt = [];
	for(i=0; i<str.length ; i++){
		if(!cnt[str.charAt(i)]) 	cnt[str.charAt(i)] = 1;
		else cnt[str.charAt(i)]++; //중복되지 않는 첫번째 글자 찾기
//		else return str.charAt(i); // 중복되는 첫번째 글자 찾기
	}
	for(var prop in cnt){
		if(cnt[prop]==1)
			return prop;
	}
}

console.log(1111, findNonRepeatedChar2("qweqwehjasdasdh"))




function removeChars(oriStr, delStr){
	var tempArr = new Array(256);
	var i, j =0
	for(i=0; i<tempArr.length; i++ ){
		tempArr[i] = 0;
	}
	while(delStr.charAt(j)){
		tempArr[delStr.charAt(j).charCodeAt()]=1;
		j++;
	}
	i=0,j=0;
	var tempStr ='';
	while(oriStr.charAt(i)){
		if(!tempArr[oriStr.charAt(i).charCodeAt()]){
			tempStr +=oriStr.charAt(i);
			console.log(tempStr)
		}
		i++;
	}
	return tempStr;
}




function isLoopInLL(head){
	var hare = head;
	var tortoise = head;
	while(hare && tortoise){
		hare = hare.next;
		if(hare == tortoise) return hare;
		if(hare == null) return false;
		hare = hare.next;
		if(hare == tortoise) return hare;
		tortoise = tortoise.next;
	}
	return false;
}

function isLoopInLL2(head){
	var hare = head;
	var tortoise = head;

	function checkLoopLength(start){
		var loopStart = start;
		var loopLength =1;
		while(loopStart != start.next){
			start = start.next;
			loopLength++;
		}
		return loopLength;
	}

	while(hare && tortoise){
		hare = hare.next;
		if(hare == tortoise){
			return  checkLoopLength(hare);
		}
		if(hare == null) return false;
		hare = hare.next;
		if(hare == tortoise) {
			return checkLoopLength(hare);
		}
		tortoise = tortoise.next;
	}
	return false;
}

function reverseLL(head){
	var tempNode = null;
	var nextNode = null;
	var curNode = head;

	while(curNode){
		nextNode = curNode.next;  // 1.다음 노드 정보 저장
		curNode.next = tempNode;  // 2.현재 노드의 링크가 이전 노드를 가리키도록 변경
		tempNode = curNode;  //3.현재노드 정보를 저장
		curNode = nextNode;  //4.현재 노드 포인터를 다음노드를 가리키도록 변경
	}
	return tempNode;
}

function llNode(data){
	this.data = data;
	this.next = null;
}


//var node1 = new llNode(1);
//var node2 = new llNode(2);
//var node3 = new llNode(3);
//var node4 = new llNode(4);
//var node5 = new llNode(5);
////var node6 = new llNode(6);
//node1.next = node2;

var arrq = {};

for (var i = 0 ; i<6; i++){
	arrq[i] = new llNode(i);
}

console.log("asdasdasd", arrq);

//node2.next = node3;
//node3.next = node4;
//node4.next = node5;
//node5.next = node3;
//
////console.log(reverseLL(node1))
//
////console.log(node5.next.next.next)
//console.log(isLoopInLL2(node1))


//var a = 10;
//var arr = [1,2,3,4,5,6,7,8,9,10]
//function b(a){
//
//	a.push(11);
//	console.log("in :",a)
//}
//b(arr);
//console.log("after :",arr);
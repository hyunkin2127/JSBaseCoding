/**
 * Created by Heon on 15. 4. 20.
 */

/**
 * 1) 요청프로세스 저장해둘 스택
 * 2) 새 페이지 요청 --> 기존 페이지 삭제 --> 새 페이지 삽입
 * 3) 삭제될 페이지 검색방법.
 */

function LRU2(size){

	return (function(){
		this.size = size || 5;
		this.arr = [];
		this.hit = null;
	}(size))
}



function LRU(size){
	this.size = size || 5;
	this.arr = [];
	this.hit = null;
}

LRU.prototype.searchHit = function(page){
	for(var i = 0 ; i<this.arr.length ; i++){
		if(this.arr[i] == page){
			this.hit = i;
			return true;
		}
	}
	return false;
}


LRU.prototype.insertPage = function(page){
	if(this.searchHit(page)){
		this.arr.push(this.arr.splice(this.hit,1)[0]);
	}
	else{
		if(this.arr.length == this.size){
			this.arr.shift();
		}
		this.arr.push(page);

	}
};

var qwe = new LRU();
var qwer = new LRU2()

qwe.insertPage(1)
qwe.insertPage(2)
qwe.insertPage(3)
qwe.insertPage(4)
qwe.insertPage(5)
qwe.insertPage(3)
qwe.insertPage(4)
qwe.insertPage(8)
console.log(qwe);

/**
 * Created by Heon on 15. 7. 1.
 * 병합정렬
 */



//1.sort
function Sort(arr, left, right){

	if(left < right){
		console.log(111, left, right);
		var mid = Math.floor((left+right)/2);
		console.log(mid);
		Sort(arr, left, mid);
		Sort(arr, mid+1, right);
		merge(arr, left, mid, right);
	}

}



//2.merge

function merge(arr, left, mid, right){
	var temp = [];
	var leftStart = left
		,	rightStart = mid+1
		, tempIdx = left;

	console.log(1);
	while(leftStart <= mid && rightStart <= right){
		if(arr[leftStart] < arr[rightStart]) temp[tempIdx] = arr[leftStart++];
		else temp[tempIdx] = arr[rightStart++];
		tempIdx++;
	}

	console.log(2);
	while(leftStart <= rightStart){
		if(leftStart < mid) temp[tempIdx] = arr[leftStart++];
		if(rightStart < right) temp[tempIdx] = arr[rightStart++];
		tempIdx++;
	}

	console.log(3);
	for(var i = left; i<right; i++)
		arr[i] = temp[i];

}

function merge_sort(arr) {
	var len = arr.length, m = Math.floor(len/2);
	if (len <= 1) return arr; // 더이상 배열을 나눌수 없으면 반환함
	return merge1(merge_sort(arr.slice(0, m)), merge_sort(arr.slice(m)));
	// 배열을 중심을 찾아( m ) 절반으로 조각내어 전달함
}

function merge1(left,right) { // left : 왼쪽배열, right : 오른쪽 배열
	var result = [];
	var leftLen = left.length, rightLen = right.length;
	while (leftLen > 0 && rightLen > 0) {
		if (left[0] <= right[0]) { // 왼쪽배열의 인자가 더 작다면
			result.push(left.shift()); // 왼쪽배열의 0번 idx 값을 잘라내어 결과 배열에 push함
			leftLen--; // 왼쪽 배열 길이 감소
		}
		else {
			result.push(right.shift());
			rightLen--;
		}
	}

	if (leftLen > 0) { //왼, 오른 어느 한쪽이 다 이전되면 둘중 하나는 0을 갖게됨. 따라서 0 이상인 배열에 대해 남은 이전 수행
		result.push.apply(result, left); // result와 left 배열을 합침 --> result 뒤에 left를 붙인다.
	} else if (rightLen > 0) {
		result.push.apply(result, right);
	}
	return result;
}

var arr = [1,5,2,4,6,10,3,50,26,17,22,29,40,35,45,21];
//console.log(merge_sort(arr));
//Sort(arr, 0, arr.length-1);
//console.log(arr);


//console.log(arr.push);
/**
 * Created by Heon on 15. 7. 1.
 */



function qsort(arr) {
	if (arr.length == 0) return [];
	var left = [];
	var right = [];
	var pivot = arr[0];
	for (var i = arr.length; --i;) { //? 이 조건이 뭔지 확인 필요
//	for (var i = arr.length; i>=0; --i){ // 이거랑 똑같은것 같은데 이대로하면 스택오버플로우 발생함
		console.log(i);
		if (arr[i] < pivot) left.push(arr[i]); // 피벗값보다 작은 값을 왼쪽에 넣고
		else right.push(arr[i]); // 피벗값보다 큰값을 오른쪽 배열에 넣는다.
	}
	return qsort(left).concat(pivot, qsort(right)); // left를 정렬하고 나온 결과에 pivot값과 오른쪽 배열을 붙임.
	//mergesort 에 있는 reuslt.push.apply(result, left)와 비슷한 기능.
}

var arr = [1,5,2,4,6,10,3,50,26,17,22,29,40,35,45,21];
console.log(qsort(arr));

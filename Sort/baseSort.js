
/**
 * Created by Heon on 15. 7. 1.
 *
 * 기본적인 정렬 모음
 * 1. 버블
 * 2. 선택
 * 3. 삽입
 * 4. 쉘
 */


// 1. 버블정렬 : 인접한 두개의 데이터를 비교해가면서 정렬을 행하는 방법
// 정렬된 데이터는 정렬 범위에서 제외시킨다.
function bubbleSort(arr){
	var swapped = true;
	var temp;
	for(var i = 0; i<arr.length && swapped; i++){
		swapped = false;
		for(var j = 0; j<arr.length - i-1; j++ ){
			if(arr[j] > arr[j+1]){ // 괄호 방향으로 오름, 내림 결정
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				swapped = true;
			}
		}
	}
};

var arr = [1,5,2,4,6,10,3,50,26,17,22,29,40,35,45,21];
bubbleSort(arr);
console.log(arr);


// 2. 선택정렬 : 정렬시킬 값을 선택한뒤 배열을 탐색하여 선택값의 위치에
// 적합한 값을 찾고, 두값의 위치를 교체시키는 방법. 이를 반복하여 정렬시킴
function selectionSort(arr){
	var value;
	var j;
	var temp;
	for(var i = 0; i<arr.length; i++){
		value = i;
		for( j = i+1; j<arr.length; j++){ // arr[i]와 비교대상을 찾아야 하므로 i+1부터
			if(arr[j] < arr[value]) value = j; // 괄호 방향으로 오름내림 결정
		}
		temp = arr[i];
		arr[i] = arr[value];
		arr[value] = temp;
	}
}
//selectionSort(arr);
//console.log(arr);


// 3. 삽입정렬 : 값을 밀어 내면서 정렬시키는 방법
// 정렬시킬 값을 저장해둔채로, 자기자리를 찾아가도록함. 이때 값을 밀어내면서 자기자리를 찾는다.
function insertionSort(){
	var data;
	for(var i=0; i<arr.length; i++){
		data = arr[i]; // 정렬할 값을 저장하고
		for(var j=i-1; j>=0; j--){ // 정렬시킬 데이터의 앞칸 부터 정렬
			if(arr[j] > data) // 괄호 방향으로 오름내림 결
				arr[j+1] = arr[j];	// 오른쪽으로 한칸씩 민다
			else break;
		}
		arr[j+1] = data;
	}
}

//insertionSort(arr);
//console.log(arr);
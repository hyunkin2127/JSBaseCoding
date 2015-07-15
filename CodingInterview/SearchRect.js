/**
 * Created by Heon on 15. 3. 29.
 */

/**
 * 코딩인터뷰 Chapter5. Stack p180 Q23
 *  - 배열값이 이루는 사각형넓이의 최대값 찾기
 * 1) 배열 검색시순차적으로 범위를 넓혀감
 *   1칸씩, 2칸씩.3칸씩 .... n 칸씩 반복하여 계산
 *   각 칸마다 가장 낮은 높이를 선택하여 넓이를 계산하면 해당 사각형이 갖는 넓이가 된다.
 *   이를 배열 전체에 반복하여 얻은 넓이를 비교하면
 *   최대값을 구할 수 있다.
 */

function searchArray(arr){

  if(!arr){
    console.log("Empty Array!!")
    return;
  }

  var tempArea = 0
    , minHeight = 0  // 배열값들이 갖는 값중 최소값을 저장하여 넓이 계산에 사용하기 위함
    , maxArea = [0];  // 계산하여 나온 최대넓이값을 저장함

  for(var i=1; i<=arr.length; i++){ // i : 칸수. 1칸, 2칸, 3칸 .... arr.length칸. (너비이므로 1부터 시작)
    console.log("i : " +i +" ----------------------------------")
    for(var j=0; j<arr.length; j++){  // arr 탐색용. 배열의 인덱스이므로 0부터 시작
      for(var k=0; k<i; k++){  // k : 각 칸 범위(1칸, 2칸 ..) 안에서 최소높이를 반복문으로 찾아가기 위한 변수
        if(k==0) minHeight = arr[j];  // 넓이를 새로구할 범위의 배열인덱스 첫째칸에 도착하면 해당 인덱스의 값(높이)을 저장하고
        if(minHeight > arr[j+k]) minHeight =  arr[j+k];  // 범위안에서 배열을 탐색하면서 더 작은 값(높이)가 있으면 덮어쓴다.
        console.log("j : "+j+" // k : "+k + " // minHeight : "+minHeight)
        if(k==i-1){
          tempArea = minHeight * i ; //위에서 얻은 높이로 계산된 넓이를 임시변수에 저장하고
          if(j==0) maxArea[i-1] = tempArea;
          console.log("tempArea : "+tempArea);
          if(tempArea > maxArea[i-1]){ // 새로 구한 넓이가 더크다면 이를 저장한다
            maxArea[i-1] = tempArea;
          }
        }
      }
    }
  }
  console.log(maxArea);
}

searchArray([2,4,6,4,2,4,2,3,5,5,1]);

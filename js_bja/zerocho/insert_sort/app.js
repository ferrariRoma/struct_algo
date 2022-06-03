/* function solution(arr) {
  const length = arr.length;
  let i, j, temp;
  for (i = 1; i < length; i++) {
    temp = arr[i];
    // 앞쪽부터 차곡차곡 정렬한다는 것을 잊지말자.
    // 해당되는 요소에만, 진행을 해준다.

    // j는 i-1로 설정해서 비교index 앞쪽 element들을 --로 훑어내려가면서 비교한다.
    // 그리고 앞쪽에 있는 element가 temp보다 크면 한 칸씩 뒤로 미룬다.
    // 가장 앞에서부터 정리를 해나가기 때문에 temp<arr[j] 했을 때 오류가 없다.
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
  const answer = arr;
  return answer;
} */

// 4차 복습
/* function insertSort(arr) {
  let temp, i, j;
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertSort([5, 6, 1, 2, 4, 3])); */

const arr = new Array(3).fill(new Array(3).fill(0));

arr[0][1] = 10;
console.log(arr);

// 위에는 모든 요소의 [1]에 10이 할당되고
// 아래는 첫번째 요소의 [1]에만 10이 할당된다.

const arr2 = Array.from(new Array(3), () => {
  return new Array(3).fill(0);
});

arr2[0][1] = 10;
console.log(arr2);

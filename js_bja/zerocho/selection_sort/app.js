// selection sort
// 선택정렬은 범위를 넓히면서 해당 범위에서 뒤에서 앞으로 비교를 한다. 결국엔 앞에서부터 차근차근 정리 돼 간다.
// 버블 정렬은 1,2번, 2,3번, 3,4번 처럼 앞에서부터 뒤로 가면서 큰 수를 뒤로 보내면서 뒤에서부터 정리해 간다.
// 선택 정렬은 배열 전체 중에 가장 작은 수를 찾아서 앞에서부터 정리를 차곡차곡 하는 것이다.
// 이렇게 하려면 둘 다 이중 반복문을 써야 하고
// 고로 둘 다 성능 똥망
/* const selection = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i; // 최솟값 초기화
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // 최솟값 인덱스 저장
      }
    }
    const temp = arr[min];
    arr[min] = arr[i]; // 최솟값이 있던 원래 자리에 앞쪽 수 저장
    arr[i] = temp; // 최솟값을 앞쪽으로 저장
  }
  return arr;
}; */

/* const selection = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}; */

// 5차 복습
function selection(arr) {
  let min, temp, i, j;
  for (i = 0; i < arr.length - 1; i++) {
    min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
console.log(selection([5, 1, 4, 7, 2, 6, 8, 3]));

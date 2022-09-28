/* // 정렬부분
const partition = (array, left, right, pivotIndex) => {
  let temp;
  // 기준 인덱스 셋팅
  const pivot = array[pivotIndex];
  while (left <= right) {
    // 조건이 충족되면 반복문 다음의 if문으로 넘어가기
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    // while조건문이 충족되면 왼쪽,오른쪽 수를 바꿔준다.
    if (left <= right) {
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }
  // 완료가 되면 기준과 array[left]위치를 바꿔준다.
  temp = array[pivotIndex];
  array[pivotIndex] = array[left];
  array[left] = temp;
  return left;
};

// 재귀부분
const quickSort = (array, left, right) => {
  // 초기화
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  // 피봇 초기화
  let pivotIndex = right;
  // 정렬시작
  // -1을 하는 것은 pivotIndex 바로 왼쪽을 오른쪽 끝 기준으로 잡아야 하기 때문!
  pivotIndex = partition(array, left, right - 1, pivotIndex);
  // 재귀시작
  if (left < pivotIndex - 1) {
    quickSort(array, left, pivotIndex - 1);
  }
  if (right > pivotIndex + 1) {
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort([4, 1, 7, 6, 3, 8, 2, 5]));
 */

// 4차 복습
/* function partition(arr, left, right, pivotIndex) {
  let temp;
  const pivot = arr[pivotIndex];
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  temp = arr[pivotIndex];
  arr[pivotIndex] = arr[left];
  arr[left] = temp;
  return left;
}

function quickSort(arr, left, right) {
  if (!left) left = 0;
  if (!right) right = arr.length - 1;
  let pivotIndex = right;
  pivotIndex = partition(arr, left, right - 1, pivotIndex);
  if (left < pivotIndex - 1) quickSort(arr, left, pivotIndex - 1);
  if (right > pivotIndex + 1) quickSort(arr, pivotIndex + 1, right);
  return arr;
} */

// 5차 복습
/* const partition = (arr, left, right, pivotIndex) => {
  const pivot = arr[pivotIndex];
  let temp;
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  temp = arr[pivotIndex];
  arr[pivotIndex] = arr[left];
  arr[left] = temp;
  return left;
};

const quickSort = (arr, left, right) => {
  if (!left) left = 0;
  if (!right) right = arr.length - 1;
  let pivotIndex = right;
  pivotIndex = right;
  pivotIndex = partition(arr, left, right - 1, pivotIndex);
  if (left < pivotIndex - 1) quickSort(arr, left, pivotIndex - 1);
  if (right > pivotIndex + 1) quickSort(arr, pivotIndex + 1, right);
  return arr;
}; */

const partition = (arr, left, right, pivotIndex) => {
  const pivot = arr[pivotIndex];
  let temp;
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  temp = pivot;
  arr[pivotIndex] = arr[right];
  arr[right] = temp;
  return right;
};

const quickSort = (arr, left, right) => {
  if (!left) left = 0;
  if (!right) right = arr.length - 1;
  let pivotIndex = left;
  pivotIndex = partition(arr, left + 1, right, pivotIndex);
  if (left < pivotIndex - 1) quickSort(arr, left, pivotIndex - 1);
  if (right > pivotIndex + 1) quickSort(arr, pivotIndex + 1, right);
  return arr;
};

console.log(quickSort([4, 1, 7, 6, 3, 8, 2, 5]));

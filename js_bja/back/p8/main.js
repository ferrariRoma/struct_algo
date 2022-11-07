// K번째수

/**
 *
 * @param {*} array 주어진 배열
 * @param {*} commands 2차원 배열로써, 각 1차원 배열의 첫 번째 인자는 slice의 시작, 두 번째 인자는 slice종료, 세 번째 인자는 정렬 후 해당 숫자 인덱스를 말한다.
 * @returns
 */

/**
 * 1. commands에
 * 2. array를 commands와 slice메소드를 이용해서 문제에 맞게 자른다.
 * 3. quickSort를 이용해서 자른 배열을 정렬(array의 길이가 1~100이기 때문에 quickSort를 사용)
 * 4. commands[i] 마지막 파라미터 값에 해당하는 요소 추출
 *
 * + 2차원 배열을 reduce()메소드를 이용해서 행과 열을 바꾼 후 풀면 어떻게 될까?
 */

/* const partition = (arr, left, right, pivotIndex) => {
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
};

const quick_sort = (arr, left, right) => {
  if (!left) left = 0;
  if (!right) right = arr.length - 1;
  let pivotIndex = right;
  pivotIndex = partition(arr, left, right - 1, pivotIndex);
  if (left < pivotIndex - 1) quick_sort(arr, left, pivotIndex - 1);
  if (right > pivotIndex + 1) quick_sort(arr, pivotIndex + 1, right);
  return arr;
};

function solution(array, commands) {
  let partition;
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    partition = array.slice(commands[i][0] - 1, commands[i][1]);
    quick_sort(partition);
    answer.push(partition[commands[i][2] - 1]);
  }
  return answer;
} */

function solution(board, commands) {
  const result = [];
  let temp;
  commands.map((el) => {
    temp = board.slice(el[0] - 1, el[1]).sort();
    result.push(temp[el[2] - 1]);
  });
  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

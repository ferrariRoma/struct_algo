// 제일 작은 수 제거하기
/* function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  } else {
    arr.sort((a, b) => b - a).pop();
    return arr;
  }
} */

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1]));

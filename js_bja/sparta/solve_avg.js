// 평균 구하기
function solution(arr) {
  return arr.reduce((acc, el) => acc + el) / arr.length;
}
console.log(solution([5, 5]));

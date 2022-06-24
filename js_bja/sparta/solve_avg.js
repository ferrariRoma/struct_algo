// 평균 구하기
/* function solution(arr) {
  let answer;
  arr.reduce((acc, el) => (answer = acc + el));
  return answer / arr.length;
} */

// 다른 풀이에서는 arr.length로 나누는 과정 마저 return문에 넣음!
function solution(arr) {
  return arr.reduce((acc, el) => acc + el) / arr.length;
}
console.log(solution([5, 5]));

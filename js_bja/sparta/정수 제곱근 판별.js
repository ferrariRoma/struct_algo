// 정수 제곱근 판별
// Math함수 찾아서 하느라 오래 걸림
function solution(n) {
  return Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1, 2);
}

console.log(solution(121));

// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}

console.log(solution(2, 5));

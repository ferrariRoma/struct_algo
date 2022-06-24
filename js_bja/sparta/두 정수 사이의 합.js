// 두 정수 사이의 합
function solution(a, b) {
  let answer = 0;
  if (a >= b) {
    while (a >= b) {
      answer += a--;
    }
  } else if (a <= b) {
    while (a <= b) {
      answer += a++;
    }
  }
  return answer;
}
console.log(solution(3, 5));

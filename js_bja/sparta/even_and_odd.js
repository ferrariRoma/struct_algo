// 짝수와 홀수
/* function solution(num) {
  let answer;
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
} */

// 다른 사람의 풀이
// 그냥 간단하게 리턴에서 바로 삼항 연산자를 통해 Odd와 Even을 return할 수 있다.
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

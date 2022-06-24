// 음양 더하기
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    // answer += signs[i] * absolutes[i];
    answer += signs[i] ? 1 * absolutes[i] : -1 * absolutes[i];
  }
  return answer;
}
console.log(solution([4, 7, 12], [true, false, true]));

// 몇 시간 했더라?
function solution(start, end) {
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    // 새벽 5시(29)에 퇴실하면 자동퇴실 되며,
    // 오후9시에 퇴실한 것으로 처리한다는 예외를 if문으로 처리!
    end[i] >= 29 ? (end[i] = 21) : end[i];
    sum += end[i] - start[i];
  }
  console.log(sum);
  return sum;
}

// 1번째 테스트 케이스
solution([9, 9, 8, 8, 7, 8, 9], [21, 25, 30, 29, 22, 23, 30]);
// 2번째 테스트 케이스
solution([9, 7, 8, 9, 7, 9, 8], [23, 22, 26, 26, 29, 27, 22]);

function solution(lottos, win_nums) {
  const answer = [];

  // lottos는 0이 있을 수 있다.
  // 0을 제외한 숫자 중 몇 개가 맞는지 확인하고,
  // 0이 다 맞거나, 다 틀린 경우가 각각 최고, 최저 등수

  // 일치하는 수
  let match_nums = 0;
  win_nums.map((num) =>
    lottos.includes(num) ? (match_nums += 1) : match_nums
  );

  // 0의 수
  let match_zero = 0;
  lottos.map((num) => (num === 0 ? (match_zero += 1) : match_zero));

  // + = 최고 등수, match_nums = 최저 등수
  let predict = 7 - (match_zero + match_nums);
  if (predict < 6) {
    answer.push(predict);
  } else {
    answer.push(6);
  }
  predict = 7 - match_nums;
  if (predict < 6) {
    answer.push(predict);
  } else {
    answer.push(6);
  }

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

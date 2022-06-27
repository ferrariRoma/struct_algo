// 로또의 최고 순위와 최저순위
function solution(lottos, win_nums) {
  let match_zero = 0;
  let rating = 7;

  // 0 갯수 파악
  lottos.forEach((el) => (el ? el : match_zero++));
  // 0 아닌 수 체크
  const checkedNum = lottos.filter((el) => el !== 0);

  // 0아닌 친구들 중에서 번호가 일치하는 것 갯수만큼 순위 상승
  win_nums.forEach((el) => (checkedNum.includes(el) ? rating-- : rating));
  console.log(rating);

  return [
    rating - match_zero >= 6 ? 6 : rating - match_zero,
    rating >= 6 ? 6 : rating,
  ];
}

console.log(solution([45, 4, 35, 20, 3, 9], [(20, 9, 3, 45, 4, 35)]));

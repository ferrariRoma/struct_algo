// 실패율
/**
 * 초기 컨셉 정리
 * @param {*} N 라운드 숫자
 * @param {*} stages 각 학생들의 라운드 진행 상황
 * @returns
 *
 * @len stages.length 이건 플레이어 숫자랑 같다.
 * @answer 배열
 * 초기화는 라운드 수만큼 해주기 때문에 new Array(N)을 통해 만들어준다.
 * 라운드 별로 통과한 애들을 모아둠
 * 이후 len에 그걸 빼면 통과 못한 인원수가 정렬이 됨.
 *
 * 0번째 인수는 1라운드를 통과 못한 친구들이 있으니까,
 * len으로 나누면 실패율.
 *
 * 1번째 인수는 2라운드를 통과 못한 친구들이 있으니까,
 * len-0번째 인수값을 해주면 실패율이 나온다.
 * (0번째 애들은 1라운드도 통과 못했기 때문에 2라운드 도전도 못해봄)
 *
 * 2번째 인수는 3라운드 통과를 못한 친구들이 있으니까,
 * len-1번째 인수값을 해주면 실패율이 나온다.
 *
 * @result 배열로, 마지막에 실패율에 따른 인자 순서를 오름차순으로 나열해준다.
 */

function solution(N, stages) {
  let len = stages.length;
  let temp = new Array(N).fill(0); // [0,0,0,0...]
  const pass = [],
    failRatio = [],
    result = [];

  // 각 라운드 별 통과자 정리해서 push배열에 넣어주기
  temp.map((el, i) => {
    stages.forEach((v) => (i + 1 < v ? el++ : el));
    pass.push(el);
  });

  // 실패율 계산 후 failRatio에 push
  pass.map((el, i) => {
    // 못한 플에이어(전체-통과한 플레이어) / 도전한 플레이어 수(매 라운드 지날 때 마다 이전 라운드를 통과 못한 플레이어를 제거)
    temp = (len - el) / len;
    len = len - (len - el);
    // 다음의 정렬을 위해서 failRatio에 순서도 미리 적어두기
    failRatio.push([temp, i + 1]);
  });

  // 정렬
  failRatio.sort((a, b) => b[0] - a[0]);
  failRatio.forEach((el) => result.push(el[1]));
  return result;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

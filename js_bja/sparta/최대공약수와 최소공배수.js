// 최대공약수와 최소공배수
const CommonDivisor = (f, j) => {
  let result;
  const big = Math.max(f, j);
  const little = Math.min(f, j);
  for (let i = little; i >= 1; i--) {
    if (f % i === 0 && j % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const CommonMultiple = (f, j) => {
  const big = Math.max(f, j);
  const little = Math.min(f, j);
  let answer;
  for (let i = big; i <= big * little; i++) {
    if (i % big === 0 && i % little === 0) {
      answer = i;
      break;
    }
  }
  return answer;
};

function solution(n, m) {
  const answer = [];
  const divisor = CommonDivisor(n, m);
  answer.push(divisor);

  // 최대공약수가 1이면 그냥 둘 곱하면 최소공배수
  if (divisor === 1) {
    answer.push(n * m);
    console.log(answer);
    return answer;
  }
  // 1이 아니면 함수 호출
  else {
    const multiple = CommonMultiple(n, m);
    answer.push(multiple);
    console.log(answer);
    return answer;
  }
}

solution(3, 12);
solution(2, 5);

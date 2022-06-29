// 소수 찾기
const checkFn = (num) => {
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      answer++;
      continue;
    }
    if (checkFn(i)) answer++;
  }

  console.log(answer);
  return answer;
}

solution(5);

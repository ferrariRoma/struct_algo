// 약수의 합
function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    n % i ? sum : (sum += i);
  }
  console.log(sum);
  return sum;
}

solution(12);

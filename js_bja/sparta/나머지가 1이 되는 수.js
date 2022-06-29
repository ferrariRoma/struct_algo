// 나머지가 1이 되는 수
function solution(n) {
  let i;
  for (i = 0; i < n; i++) {
    if (n % i === 1) break;
  }
  console.log(i);
  return i;
}

solution(10);

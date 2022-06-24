// 없는 숫자 더하기
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) sum += i;
  }
  return sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

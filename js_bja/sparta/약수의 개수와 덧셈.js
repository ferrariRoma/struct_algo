// 약수의 개수와 덧셈
function solution(left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      i % j ? count : count++;
    }
    answer.push(count);
  }

  answer = answer[Symbol.iterator]();
  let sum = 0;

  for (let i = left; i <= right; i++) {
    answer.next().value % 2 ? (sum -= i) : (sum += i);
  }
  console.log(sum);
  return sum;
}

solution(13, 17);

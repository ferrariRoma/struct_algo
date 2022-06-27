// 두 개 뽑아서 더하기
function solution(numbers) {
  let answer = [];
  let sum, pivot;

  for (let i = 0; i < numbers.length; i++) {
    pivot = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      sum = pivot + numbers[j];
      if (!answer.includes(sum)) answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));

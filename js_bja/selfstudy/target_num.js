// 타겟 넘버
/* function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  function dfs(count, sum) {
    if (count === length) {
      if (sum === target) answer++;
      return;
    }
    // count가 어떻게 보면 트리의 depth를 나타내는 역할이군!
    // 그래서 트리의 끝에 닿았는지를 length와 비교해보는 것으로 확인하는 것이구나!
    // 그래서 그 트리의 끝에 닿았다면, 두 번째 if문을 통해서 target과 값을 비교해주는 것이군!
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
} */
// [1, 1, 1, 1, 1]	3	5
// [4, 1, 2, 1]	4	2

function solution(numbers, target) {
  const length = numbers.length;
  let answer = 0;

  function dfs(count, sum) {
    if (length === count) {
      if (sum === target) answer++;
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

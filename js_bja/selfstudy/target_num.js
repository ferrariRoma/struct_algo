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

/* function solution(numbers, target) {
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
} */

// 벨로그 정리 전 복습
/* 
주어진 숫자 배열을 가지고 그 요소들을 모두 더하고 빼서 최종적으로 특정 값이 되는지에 관한 문제 입니다.
주어진 배열 안에서 특정 값이 되는 경우가 몇 가지 있는지, 즉 경우의 수와 관련된 문제 입니다.

solution 안에 DFS 함수를 만들었습니다. 이 함수는 재귀함수로써 문제에서 주어진 배열의 요소를 하나씩 더하고 빼고, 그 값을 다시 인자로 넘겨서 다음 요소에 동일한 작업을 진행해줍니다.
배열의 끝까지 더했고, 그리고 그 상태에서 타겟값과 같다면 해당 경우의 수를 카운트 해주고 재귀를 종료합니다.

시간 복잡도는 트리의 모든 leaf node까지 탐색해야 하기 때문에 O(2^배열의 길이)입니다.
*/
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  const DFS = (count, sum) => {
    if (count === length) {
      if (sum === target) answer++;
      return;
    }
    DFS(count + 1, sum + numbers[count]);
    DFS(count + 1, sum - numbers[count]);
  };

  DFS(0, 0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

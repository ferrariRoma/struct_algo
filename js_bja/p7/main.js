/**
 *
 * @param {Array} board 2차원 배열로, 인형이 쌓여있는 모습 그대로이다. 즉 아래부터 첫 번째 줄.
 * @param {Array} moves 몇 째줄 열에서 집개를 내릴지를 알려줌.
 * @param {Array} result 가져온 인형을 넣어두는 곳. 동일한 수가 두 개 이어지면 삭제
 *
 * 1. moves 배열의 길이만큼 반복문을 돌린다.
 * 2. 1의 반복문 안에서 해당 moves의 값에 해당하는 2차원 board배열의 '열'에 가서 0부터 시작해 0이 아닌 값이 나올 때까지 내려간다.
 * 3-1. 있으면 그 결과를 result에 넣어준다.
 * 3-2. 없으면 board의 다음 행으로 내려간다.
 * 4. result에는 같은 값이 두 개면 pop()메소드를 두 번 작동시켜서 같은 값을 제거한다.
 */

/* function solution(board, moves) {
  const moves__Length = moves.length;
  const board__Length = board.length;
  const result = [];
  let result__length,
    count = 0;

  for (let i = 0; i < moves__Length; i++) {
    // moves 하나 할당
    const col = moves[i];

    // col이용해서 2차 배열에 접근
    for (let j = 0; j < board__Length; j++) {
      // 해당 열로 접근
      const target = board[j][col - 1];

      // 값이 0이 아니면 result에 push하기
      if (target) {
        result.push(target);
        // board의 해당 값 0으로 변경, result 길이를 계산
        board[j][col - 1] = 0;
        result__length = result.length;

        // result의 길이가 2부터는 중첩 검사진행
        if (
          result__length > 1 &&
          result[result__length - 2] === result[result__length - 1]
        ) {
          // true이면 pop으로 두 개 제거해주고 count에 +2
          result.pop();
          result.pop();
          count += 2;
        }
        // result에 push됐으면 moves의 다음으로 넘어가기
        break;
      }
    }
  }
  return count;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); */

// 다른 풀이 공부(2회차)
/* const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

function solution(board, moves) {
  const stacks = transpose(board).map((row) => row.filter((el) => el !== 0));
  // 풀이에서는,
  // const stacks = transpose(board).reverse().map((row) => row.filter((el) => el !== 0));
  // reverse()메소드를 이용해서 뒤집은 다음에 pop()메소드를 사용했지만, shift()가 있기 때문에 reverse()를 빼고 진행
  const box = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].shift();
    if (!pop) continue;
    if (pop === box[box.length - 1]) {
      box.pop();
      result += 2;
      continue;
    }
    box.push(pop);
  }
  return result;
} */

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

function solution(board, moves) {
  const stacks = transpose(board).map((row) => row.filter((el) => el !== 0));
  const box = [];
  let result = 0;

  for (const move in moves) {
    const catched = stacks[moves[move] - 1].shift();
    if (!catched) continue;
    if (catched === box[box.length - 1]) {
      box.pop();
      result += 2;
      continue;
    }
    box.push(catched);
  }
  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

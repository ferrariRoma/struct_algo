/* function solution(rows, columns, queries) {
  const answer = [];
  const board = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  // 초기화
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      board[i][j] = (i - 1) * columns + j;
    }
  }

  // 이동시작
  for (let q = 0; q < queries.length; q++) {
    const [x1, y1, x2, y2] = queries[q];
    const stack = [];

    for (let i = y1; i < y2; i++) stack.push(board[x1][i]);
    for (let i = x1; i < x2; i++) stack.push(board[i][y2]);
    for (let i = y2; i > y1; i--) stack.push(board[x2][i]);
    for (let i = x2; i > x1; i--) stack.push(board[i][y1]);

    answer.push(Math.min(...stack));
    const temp = stack.pop();
    stack.unshift(temp);

    for (let i = y1; i < y2; i++) board[x1][i] = stack.shift();
    for (let i = x1; i < x2; i++) board[i][y2] = stack.shift();
    for (let i = y2; i > y1; i--) board[x2][i] = stack.shift();
    for (let i = x2; i > x1; i--) board[i][y1] = stack.shift();
  }
  return answer;
} */

function solution(rows, columns, queries) {
  const answer = [];
  // 배열 형태 생성(+1을 한 건 편의를 위해서..)
  const board = Array.from(new Array(rows + 1), (num) =>
    new Array(columns + 1).fill(0)
  );
  // 배열 초기화
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      board[i][j] = (i - 1) * columns + j;
    }
  }
  // 배열 돌릴 때마다 움직인 숫자 파악하기
  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const movedNum = [];

    for (let j = y1; j < y2; j++) movedNum.push(board[x1][j]);
    for (let j = x1; j < x2; j++) movedNum.push(board[j][y2]);
    for (let j = y2; j > y1; j--) movedNum.push(board[x2][j]);
    for (let j = x2; j > x1; j--) movedNum.push(board[j][y1]);

    answer.push(Math.min(...movedNum));
    const temp = movedNum.pop();
    movedNum.unshift(temp);

    for (let j = y1; j < y2; j++) board[x1][j] = movedNum.shift();
    for (let j = x1; j < x2; j++) board[j][y2] = movedNum.shift();
    for (let j = y2; j > y1; j--) board[x2][j] = movedNum.shift();
    for (let j = x2; j > x1; j--) board[j][y1] = movedNum.shift();
  }
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);

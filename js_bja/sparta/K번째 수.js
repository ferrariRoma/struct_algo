// K번째 수
// 컨셉
//   console.log(board.slice(commands[0][0] - 1, commands[0][1]));

function solution(board, commands) {
  let answer = [];

  const cb = (el) => {
    const temp = board.slice(el[0] - 1, el[1]);
    temp.sort((a, b) => a - b);
    answer.push(temp[el[2] - 1]);
  };

  commands.forEach(cb);
  console.log(answer);
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

// Recursive DFS(0으로 만들기!) => 일단 트리에 대한 공부가 안된 상태라 이해가 잘 안됨
// 보류하고 공부하고 오기
/* function solution(a, edges) {
  const tree = new Array(a.length).fill().map((_) => []);

  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }
  var answer = -2;
  return answer;
} */

function solution(a, edges) {
  let sum = 0;
  for (const i in edges[0]) {
    console.log(i);
  }
}

console.log(
  solution(
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3],
    ]
  )
);

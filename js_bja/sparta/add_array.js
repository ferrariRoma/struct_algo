// 행렬의 덧셈

// 1. reduce를 이용해서 2차원 배열의 행렬을 바꾼다. 이렇게 되면 각 자리가 같은 곳으로 모이기 때문에 더하기는 쉽지만,
// 더하고 나서 다시 분배를 해야 하기 때문에 어차피 해당자리로 돌아가야 하는 단점이 있다.
/* const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

function solution(arr1, arr2) {
  const transedArr1 = transpose(arr1);
  const transedArr2 = transpose(arr2);
  console.log(transedArr1);
  console.log(transedArr2);
} */

// 2. 2차원 배열을 미리 생성 후에 반복문을 중첩해서 미리 생성한 2차원 배열에 할당
/* function solution(arr1, arr2) {
  let result = Array.from(new Array(arr1.length), () =>
    new Array(arr1[1].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
} */

// 다른 풀이 중에 더 쉬운 방법을 생각해보자!
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = []; // 이걸 안해주면 answer[i].push에서 에러가 난다.
    // answer의 i번째 요소가 배열이 아니기 떄문에 push()메소드를 사용할 수 없군!
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

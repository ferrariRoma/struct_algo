// 알고리즘 테스트 (2차)
function solution(arr1, arr2, signs) {
  const array1 = arr1;
  const array2 = arr2;
  const len = array1.length;
  const answer = Array.from(new Array(len), () => new Array(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < array1[i].length; j++) {
      answer[i].push(array1[i][j] + array2[i][j]);
      if (!signs[i][j]) {
        answer[i][j] *= -1;
      }
    }
  }
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ],
  [
    [true, true],
    [true, false],
  ]
);

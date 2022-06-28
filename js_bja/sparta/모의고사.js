// 모의고사
/* function solution(answer) {
  const fool1 = [1, 2, 3, 4, 5];
  const fool2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const fool3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // 이까지 셋팅하고 컨셉이 안떠올라서 검색!

  const fool1Length = fool1.length;
  const fool2Length = fool2.length;
  const fool3Length = fool3.length;
  let fool1Result = 0;
  let fool2Result = 0;
  let fool3Result = 0;

  fool1.forEach((el, i) =>
    el === answer[i % answer.length] ? fool1Result++ : fool1Result
  );
  fool2.forEach((el, i) =>
    el === answer[i % answer.length] ? fool2Result++ : fool2Result
  );
  fool3.forEach((el, i) =>
    el === answer[i % answer.length] ? fool3Result++ : fool3Result
  );

  const resultArr = [fool1Result, fool2Result, fool3Result];
  const top = Math.max(...resultArr);
  const result = [];
  resultArr.forEach((el, i) => (top === el ? result.push(i + 1) : result));
  return result;
} */

function solution(arr) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const point = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    one.forEach((el, i) => (el === arr[i % 5] ? point[0]++ : point[0]));
    two.forEach((el, i) => (el === arr[i % 8] ? point[1]++ : point[1]));
    three.forEach((el, i) => (el === arr[i % 10] ? point[2]++ : point[2]));
  }

  const maxPoint = Math.max(...point);
  const result = [];
  point.forEach((el, i) => (el === maxPoint ? result.push(i + 1) : result));
  return result;
}

console.log(solution([1, 3, 2, 4, 2]));

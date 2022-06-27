// 최소 직사각형

/* *
 * 0. 가로와 세로 사이즈에 대한 행,렬 변환을 하고,
 * 1. 가로 사이즈에 대한 측정을 끝내고, 최대치를 선별한다.
 * 2. 세로 사이즈에 대한 측정을 끝내고, 최대치를 선별한다.
 * 3. 가로와 세로 중 작은 값이 해당하는 배열 위치의, 상대배열(가로면 세로, 세로면 가로) 값을 가지고,
 * 
 * 4-1. 바꿔도 되는지 대조. 큰 값이 있으면 바꿔줘도 되고,
 * 4-1-1. 해당 배열 값을 0으로 맞춰준다.
 * 4-1-2. 이후 다시 1,2,4-1과정을 거치며 확인해준다.
 * 
 * 4-2. 큰 값이 없으면 바꿀 수 없으니까
 * 4-2-1. 그대로 가로 세로를 곱해서 계산해준다.
 * 
 *
 *
[
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]
   80 70
-> 80 > 70
-> 70은 2번째, 2번째 30을 가지고 돌아다녀보자.
-> 30보다 큰 친구 있나? 있다. 
-> 2번째 요소 0으로
[ [ 60, 0, 60, 80 ], [ 50, 0, 30, 40 ] ]
-> 80 50
-> 80 > 50
-> 50은 첫 번째, 첫 번째는 60. 돌아다녀보자.
-> 60은 50,30,40 보다 크다. 고로 바꿀 수 없다.
-> 그럼 80*50!
 *
 * @param {*} sizes 2차원 배열로, 각 명함의 가로와 세로 사이즈를 2차원 배열로 나타냄
 * @returns
 *
 */

// 0번에 대한 실행(어떻게를 만들어줬기 때문에 명령형! 하지만 선언형으로 구성된 함수임ㅋㅋ)
// const transpose = (arr) =>
//   arr.reduce(
//     (result, el) => el.map((_, j) => [...(result[j] || []), el[j]]),
//     []
//   );

// function solution(sizes) {
//   let index, check;
//   let answer;

//   const transedArr = transpose(sizes);

//   // 조건이 충족될 때까지 진행할 거기 때문에 무한 반복문 사용
//   while (1) {
//     let maxWidth = 0;
//     let maxHeight = 0;
//     // 1,2번에 대한 실행

//     /* transedArr[0].forEach((el) => (maxWidth < el ? (maxWidth = el) : maxWidth));
//     transedArr[1].forEach((el) =>
//       maxHeight < el ? (maxHeight = el) : maxHeight
//     ); */
//     maxWidth = Math.max(...transedArr[0]);
//     maxHeight = Math.max(...transedArr[1]);

//     // 3번에 대한 조건문
//     // 가로가 더 큰 경우
//     if (maxWidth > maxHeight) {
//       // maxHeight에 해당하는 maxWidth값을 가지고 Height배열을 찾아다니면서 큰 값이 있는지 찾기
//       index = transedArr[1].indexOf(maxHeight);
//       check = transedArr[1].filter((el) => el > transedArr[0][index]);

//       // 4-1-1 바꿀 수 있으면,
//       if (check.length && index !== transedArr[0].indexOf(maxWidth)) {
//         transedArr[0][index] = 0;
//         transedArr[1][index] = 0;
//         // 4-1-2 반복문으로 다시 돌아감
//         continue;
//       }
//       // 4-2 바꿀 수 없으면
//       else {
//         // 4-2-1 계산해서 리턴
//         answer = maxWidth * maxHeight;
//         break;
//       }
//     }

//     // 세로가 더 큰 경우
//     else {
//       index = transedArr[0].indexOf(maxWidth);
//       check = transedArr[0].filter((el) => el > transedArr[1][index]);

//       // 4-1-1 바꿀 수 있으면,
//       if (check && index !== transedArr[1].indexOf(maxHeight)) {
//         transedArr[0][index] = 0;
//         transedArr[1][index] = 0;
//         // 4-1-2 반복문으로 다시 돌아감
//         continue;
//       }
//       // 4-2 바꿀 수 없으면
//       else {
//         // 4-2-1 계산해서 리턴
//         answer = maxWidth * maxHeight;
//         break;
//       }
//     }
//   }

//   return answer;
// }

// console.log(
//   solution([
//     [10, 7],
//     [12, 3],
//     [8, 15],
//     [14, 7],
//     [5, 15],
//   ])
// );

// 런타임에 걸려서 실패!
// 결국 다른 방법을 찾아서~
// 너무 어렵게 생각한 것 같다! 찾은 문제풀이에서 내 풀이를 응용해보기
const transpose = (arr) =>
  arr.reduce(
    (result, el) =>
      el.map((_, j) => {
        console.log([...(result[j] || [])]);
        console.log(el[j]);
        console.log([...(result[j] || []), el[j]]);
        return [...(result[j] || []), el[j]];
      }),
    []
  );

function solution(arr) {
  let modified = arr.map(([w, h]) => (w < h ? [w, h] : [h, w]));
  modified = transpose(modified);
  const x = Math.max(...modified[0]);
  const y = Math.max(...modified[1]);
  return x * y;
}

console.log(
  transpose([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

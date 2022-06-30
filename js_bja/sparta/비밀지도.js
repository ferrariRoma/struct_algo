// 비밀지도
/**
 *
 * @param {*} n 정사각형 지도의 한 변의 길이
 * @param {*} arr1 지도1의 2진법의 10진법 수를 모아둔 배열
 * @param {*} arr2 지도1의 2진법의 10진법 수를 모아둔 배열
 * @returns
 *
 * 지도의 조건 : 각 지도를 합친 결과에서 벽은 or, 공백은 and 조건을 충족시켜야 됨.
 *
 * 1. arr1, arr2에 대한 2진법 변환을 하고서
 * 2. n만큼의 길이가 안되는 부분은 길이가 n이 될 때까지 0으로 채운다.
 * 3. 두 배열을 합칠 때, 공백은0+0=0, 벽은 1+1=1, 1+0=1이라는 조건을 맞추어 결과를 만든다.
 * 4. 결과에 따른 # or ' '처리
 */

const transpose = (arr) =>
  arr.reduce(
    (result, arr) => arr.map((_, i) => [...(result[i] || []), arr[i]]),
    []
  );

function solution(n, arr1, arr2) {
  let array1 = arr1;
  let array2 = arr2;

  // 1. arr1, arr2에 대한 2진법 변환을 하고서
  array1 = array1.map((el) => el.toString(2));
  array2 = array2.map((el) => el.toString(2));

  // 2. n만큼의 길이가 안되는 부분은 길이가 n이 될 때까지 0으로 채운다.
  array1 = array1.map((el) => el.padStart(n, "0"));
  array2 = array2.map((el) => el.padStart(n, "0"));

  // 3. 두 배열을 합칠 때, 공백은0+0=0, 벽은 1+1=1, 1+0=1이라는 조건을 맞추어 결과를 만든다.
  // 이렇게 했을 때 첫 번째 열의 값은 첫 번째 행에 정렬이 됨!
  let sum = Array.from(new Array(n), () => new Array(0));

  for (let i = 0; i < n; i++) {
    array1.map((el, j) => sum[i].push(Number(el[i]) + Number(array2[j][i])));
  }

  // 그래서 다시 행렬을 정렬해주고,
  let result = Array.from(new Array(n), () => new Array(5));
  result = transpose(sum);

  // 4. 결과에 따른 # or ' '처리
  for (let i = 0; i < n; i++) {
    result.map((el, j) => {
      el[i] === 0 ? (sum[j][i] = " ") : (sum[j][i] = "#");
    });
    sum[i].join("");
  }
  console.log(sum);
  sum = sum.map((el, i) => el.join(""));
  console.log(sum);
  return sum;
}

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// 	["#####","# # #", "### #", "# ##", "#####"]
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
// ["######", "###  #", "##  ##", " #### ", " #####", "### # "]

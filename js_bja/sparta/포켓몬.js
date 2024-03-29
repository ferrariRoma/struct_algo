// // 포켓몬
// function solution(nums) {
//   // 최대 가질 수 있는 포켓몬
//   const len = nums.length / 2;
//   // 중복 제거
//   const modifiedArr = [...new Set(nums)];
//   // 중복을 제거한 길이
//   const modifiedLen = modifiedArr.length;
//   // 중복이 제거된 포켓몬의 수가 최대 가질 수 있는 포켓몬의 수 보다 작거나 같으면 중복이 제거된 포켓몬의 수를 다 가질 수 있고,
//   // 중복이 제거된 포켓몬의 수가 더 많으면 최대치를 가질 수 있음
//   return len >= modifiedLen ? modifiedLen : len;
// }

// solution([3, 3, 3, 2, 2, 4]);

// 폰켓몬
/**
 *
 * @param {*} poketmons Array : 포켓몬 별로 번호가 매겨져 있음
 * @returns
 */
function solution(poketmons) {
  const length = Math.floor(poketmons.length / 2);
  const modifiedSetLength = [...new Set(poketmons)].length;
  if (length >= modifiedSetLength) return modifiedSetLength;
  return length;
}

const poketmons = [3, 1, 2, 3];
// const poketmons = [3, 3, 3, 2, 2, 4];
// const poketmons = [3,3,3,2,2,2];
solution(poketmons);

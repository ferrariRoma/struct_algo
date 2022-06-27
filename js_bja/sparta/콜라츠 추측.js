// 콜라츠 추측

// function solution(num) {
//   let count = 0;

//   while (num !== 1) {
//     if (count === 500) {
//       count = -1;
//       break;
//     }

//     if (!(num % 2)) {
//       // 짝수
//       num /= 2;
//     } else {
//       // 홀수
//       num = num * 3 + 1;
//     }
//     count++;
//   }

//   return count;
// }

function solution(num) {
  let count = 0;

  while (num !== 1 && count !== 500) {
    num % 2 ? (num = num * 3 + 1) : (num /= 2);
    count++;
  }
  return num === 1 ? count : (count = -1);
}

console.log(solution(6));

// 하샤드 수

// 3자리 이상을 커버할 수 없음
/* function solution(x) {
  return x % (x.toString()[0] * 1 + x.toString()[1] * 1) ? false : true;
} */

function solution(x) {
  return x % [...x.toString()].reduce((sum, el) => Number(sum) + Number(el), 0)
    ? false
    : true;
}

console.log(solution(13));

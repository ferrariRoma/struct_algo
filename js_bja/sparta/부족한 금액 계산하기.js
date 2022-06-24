// 부족한 금액 계산하기(테스트 케이스 런타임에러)
/* function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return Math.abs(money);
} */

// 다른 풀이(성공) -> 아마도 total이 더 작은 경우가 반영이 안되어 있었기 때문인듯
function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  return money < total ? total - money : 0;
}

console.log(solution(3, 20, 4, 10));

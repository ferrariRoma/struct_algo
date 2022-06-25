// 수박수박수
/* function solution(n) {
  let str = "수박";
  str = str.repeat(n).substring(0, n);
  return str;
} */
function solution(n) {
  let str = "수박";
  str = str.split("");
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (i % 2) {
      answer.push(str[1]);
    } else {
      answer.push(str[0]);
    }
  }
  return answer.join("");
}
console.log(solution(3));

// 올바른 괄호
/* function solution(s) {
  let count = 0;

  for (let i of s) {
    i === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  return count > 0 ? false : true;
} */

// 124
/* function solution(n) {
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
} */

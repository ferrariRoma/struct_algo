// 자릿수 더하기
function solution(n) {
  /*   return n
    .toString()
    .split("")
    .reduce((acc, el) => Number(acc) + Number(el)); */

  /*     return n
    .toString()
    .split("")
    .reduce((acc, el) => acc * 1 + el * 1); */

  /* 
return [...n.toString()].reduce((acc, el) => acc * 1 + el * 1); */

  n = n.toString();
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  return sum;
}

console.log(solution(123));

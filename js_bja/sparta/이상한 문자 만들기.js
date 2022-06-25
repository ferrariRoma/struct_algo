// 이상한 문자 만들기
/* 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, 
 solution을 완성하세요. */

/* function solution(s) {
  return [...s.toUpperCase()]
    .map((el, i) => (i % 2 ? el.toLowerCase() : el))
    .join("");
} */

function solution(s) {
  let temp = s.split(" ");
  let answer = [];
  for (let i = 0; i < temp.length; i++) {
    answer.push(
      temp[i]
        .split("")
        .map((el, i) => (i % 2 ? el.toLowerCase() : el.toUpperCase()))
        .join("")
    );
  }
  return answer.join(" ");
}

console.log(solution("try hello world"));

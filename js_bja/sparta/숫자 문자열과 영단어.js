// 숫자 문자열과 영단어
function solution(s) {
  let number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < number.length; i++) {
    answer = answer.split(number[i]).join(`${i}`);
  }
  return Number(answer);
}

solution("2three45sixseven");
// 234567

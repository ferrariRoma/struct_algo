// 숫자 문자열과 영단어

/* function solution(s) {
  let arr = s;
  arr = arr.replace(/zero/g, 0);
  arr = arr.replace(/one/g, 1);
  arr = arr.replace(/two/g, 2);
  arr = arr.replace(/three/g, 3);
  arr = arr.replace(/four/g, 4);
  arr = arr.replace(/five/g, 5);
  arr = arr.replace(/six/g, 6);
  arr = arr.replace(/seven/g, 7);
  arr = arr.replace(/eight/g, 8);
  arr = arr.replace(/nine/g, 9);
  arr = arr.replace(/ten/g, 10);
  return +arr;
}

console.log(solution("2three45sixoneseven")); */

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
  console.log(1);
  let answer = s;
  for (let i = 0; i < number.length; i++) {
    let arr = answer.split(number[i]);
    answer = arr.join(i);
  }
  return answer;
}
console.log(solution("2three45sixoneseven"));

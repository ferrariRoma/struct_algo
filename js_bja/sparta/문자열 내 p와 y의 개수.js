// 문자열 내 p와 y의 개수
function solution(s) {
  let lowercase = s.toLowerCase();
  let countY = 0,
    countP = 0;
  [...lowercase].forEach((el) =>
    el === "y" ? countY++ : el === "p" ? countP++ : el
  );
  return countP === countY ? true : false;
}

solution("pPoooyY");

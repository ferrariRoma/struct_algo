// 시저 암호
// 아스키코드로 변환

// 더해서 90(a) 이상이 되어버리는(대문자에서 소문자로 변환)숫자에 대한
// 예외처리에서 어려웠음!
// n의 최대치인 25를 더했을 때 그렇게 되는 H부터는 예외처리를 하려고 했으나
// 그렇게 해주려고 여러 시도를 해도 테스트 케이스 몇 개에서 계속 에러가 나서
// 검색을 이용함!

/* function solution(s, n) {
  let arraied = s.split("");
  arraied = arraied.map((el) => el.charCodeAt());

  for (let i = 0; i < arraied.length; i++) {
    // 뒷쪽 대문자(H)부터는 최대치 25를 더하면 소문자 영역으로 넘어감
    // 그래서 선보정!
    if (n >= 7 && arraied[i] >= 72 && arraied[i] <= 90) {
      arraied[i] -= 25;
      continue;
    }

    // 그 외 경우
    // 빈칸이면 그대로, 아닐 땐 n더해줌
    if (arraied[i] !== 32) {
      arraied[i] += n;
    }

    // 더 해진 값이 규격 외 값이면 보정
    if ((arraied[i] > 90 && arraied[i] < 97) || arraied[i] > 122)
      arraied[i] -= 26;
  }
  return arraied.map((el) => String.fromCharCode(el)).join("");
} */

// 공부한 다른 풀이
/* function solution(s, n) {
  return s
    .split("")
    .map((value) => {
      if (value === " ") return value;
      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join("");
} */

// 복습
function solution(s, n) {
  const question = [...s];
  // 문자열을 대문자나 소문자로 바꿔준 다음 Z를 넘어가는 수는 -26을 해주고,
  // Z를 넘어가지 않는 수는 그냥 더해준다.
  const result = question
    .map((el) => {
      if (el.charCodeAt() === 32) return 32;
      return el.toLowerCase().charCodeAt() + n > 122 // el.toUpperCase().cahrCodeAt() + n > 90와 같다.
        ? el.charCodeAt() + n - 26
        : el.charCodeAt() + n;
    })
    .map((el) => String.fromCharCode(el))
    .join("");
  return result;
}

solution("a B z", 4);
// -> 너무 과정에 집착한 것 같다. 결과론적으로 보면 기준을 넘어가는 경우는 같음!
// 과정에서 안보이면 결과에서 단순화하자!

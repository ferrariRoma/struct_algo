// 신규 아이디 추천
function solution(str) {
  let answer = str
    .toLowerCase()
    .replace(/[^a-z0-9\-_\.]/g, "")
    .replace(/\.{2,3}/g, ".") // .replace(/\.{2,}/g, ".")이렇게 해야 통과. 아마 ......인 경우도 생각하나봄..
    .replace(/^\.|\.$/, "")
    .replace(/^$/, "a") // replace("", "a")은 에러가 남!
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = answer.length;
  return (answer =
    len <= 2 ? answer + answer[len - 1].repeat(3 - len) : answer);
}

solution("...!@BaT#*..y.abcdefghijklm");
solution("=.=");
// console.log("bat.y.abcdefghijklm");

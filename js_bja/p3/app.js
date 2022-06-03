function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^0-9a-z-_\.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");
  const len = answer.length;
  answer = len <= 2 ? answer + answer.charAt(len - 1).repeat(3 - len) : answer;
  return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");

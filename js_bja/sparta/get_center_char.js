// 가운데 글자 가져오기
function solution(s) {
  return s.length % 2 === 0
    ? s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
    : s[Math.floor(s.length / 2)];
}
console.log(solution("abde"));

// 다른 한 줄 풀이에서는 strsub라는 메소드를 쓰는데 mdn에 주의문구가 있어서 그냥 안봄~

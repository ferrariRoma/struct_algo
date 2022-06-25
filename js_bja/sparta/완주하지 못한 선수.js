// 완주하지 못한 선수

// 실패한 풀이(중복되는 사람이 있으면 다 없어진다.)
/* function solution(participant, completion) {
  const answer = completion.filter(
    (el, _, all) => true !== participant.includes(el)
  );
  console.log(answer);
  return "End";
} */

// 그럼 하나씩 대조를 해서 지워주도록 하자 ->
/* 
participant.splice(participant.indexOf(...), 1) 이거 까지는 접근을 했고,
...에 completion의 요소를 하나씩 넣어서 해당되는 친구를 splice()메소드를 이용해 삭제해주면 좋겠다는 생각도 했다.
근데 어떻게 구현해야 할지 생각이 안떠올라서 이전에 푼 걸 보니, forEach를 썼다.
forEach가 생각이 안나서(map을 넣어도 상관없음. 어차피 participant에 영향 주는 건 아니니까) 틀린 문제!

그리고 마지막에 문자열을 만들어야 해서 toString()을 썼다.

헐 근데 정확성 테스트는 통과했는데 효율성 테스트에서 망함! 머선일이고.
아 이전에도 이거 관련해서 풀다가 끝낸 문제구만? 되던게 안될 일은 없으니!
 */
/* function solution(participant, completion) {
  completion.forEach((el) => participant.splice(participant.indexOf(el), 1));
  return participant.toString();
} */

// for문으로 바꿔도 시간초과!
/* function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }
  return participant.toString();
} */

// search시작
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);

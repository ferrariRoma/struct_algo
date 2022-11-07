// 프로그래머스 - 신고 결과 받기
/* function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);

  const report_list = {};

  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
      // 중복 신고내용을 잡기위해서구나!
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
} 

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
*/

// 새로운 풀이법!
function solution(id_list, report, k) {
  // report자료정리. 하나씩 때서 split으로 나눈 '배열'을 return으로 반환
  let reports = [...new Set(report)].map((user) => {
    return user.split(" ");
  });

  // 신고당한 유저들의 횟수 정리
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // 신고에 성공한 횟수를 정리
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((user) => good.get(user) || 0);

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

// function solution(tickets) {
//   const answer = [];
//   const terminal = ["ICN"];

//   while (terminal.length > 0) {
//     startPoint = terminal.shift();
//     answer.push(startPoint);
//     const temp = [];
//     for (let i of tickets) {
//       if (i[0] === startPoint) {
//         temp.push(i[1]);
//         i[0] = 0;
//         i[1] = 0;
//       }
//     }
//     temp.sort();
//     terminal.push(...temp);
//   }

//   return answer;
// }

/* function solution(tickets) {
  const answer = [];

  const dfs = (departure, ticket) => {
    if (ticket.length <= 0) return;
    const temp = [];

    for (let i of ticket) {
      if (i[0] === departure) {
        temp.push(i[1]);
      }
    }

    answer.push(departure);

    const arrival = temp.sort()[0];
    if (ticket.length === 1) answer.push(arrival);
    const removed = [d0eparture, arrival];
    ticket = ticket.filter(
      (el) => el[0] !== removed[0] || el[1] !== removed[1]
    );

    return dfs(arrival, ticket);
  };

  dfs("ICN", tickets);
  return answer;
} */

// function solution(tickets) {
//   let answer = [];

//   const DFS = (airport, tickets, path) => {
//     let newPath = [...path, airport];

//     if (tickets.length === 0) {
//       answer.push(newPath);
//     } else {
//       tickets.map((ticket, idx) => {
//         if (ticket[0] === airport) {
//           let copiedTickets = [...tickets];
//           const [[from, to]] = copiedTickets.splice(idx, 1);
//           DFS(to, copiedTickets, newPath);
//         }
//       });
//     }
//   };

//   DFS("ICN", tickets, []);
//   console.log(answer);
//   return answer.sort()[0];
// }

/* 
문제에 대한 이해
이 문제는 가진 티켓을 모두 사용을 한 다음, 
만일 가능한 경로가 2개 이상일 경우 있으면 알파벳 순서에 따라 정렬을 해주면 되는 문제입니다.

원래 문제는 '주어진 항공권을 모두 이용하여 여행경로를 짜려고 한다. 
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
방문하는 공항 경로를 배열에 담아서 return하도록 solution 함수를 작성해 한다. 
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 한다.'

나는 처음에 BFS인 줄 알았다. 
왜냐하면 알파벳 순서대로 방문을 해야 한다고 조건이 달려 있었기 때문이다. 
그래서 최적의 경로, 최단 경로의 느낌이 났다.
그런데 생각해보면 모든 경우의 수 중에 티켓을 다 쓴 경로, 
그 중에서도 알파벳 순서로 정렬해서 경로를 찾아내야 한다. 그래서 이 문제는 DFS문제이다.

*/
function solution(tickets) {
  const getTickets = [...tickets];
  const answer = [];

  const DFS = (departure, route, remain) => {
    const setNewDeparture = remain.filter((el) => el[0] === departure);

    if (remain.length === 1) {
      return answer.push([...route, ...remain[0]]);
    }
    for (let i of setNewDeparture) {
      DFS(
        i[1],
        [...route, i[0]],
        remain.filter((el) => el !== i)
      );
    }
  };

  DFS("ICN", [], getTickets);

  return answer.sort()[0];
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

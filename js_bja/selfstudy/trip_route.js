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

/* function solution(tickets) {
  let answer = [];

  const DFS = (airport, tickets, path) => {
    let newPath = [...path, airport];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, idx) => {
        if (ticket[0] === airport) {
          let copiedTickets = [...tickets];
          const [[from, to]] = copiedTickets.splice(idx, 1);
          DFS(to, copiedTickets, newPath);
        }
      });
    }
  };
  DFS("ICN", tickets, []);
  return answer.sort()[0];
} */
function solution(tickets) {
  let answer = [];

  const DFS = (departure, tickets, prevStop) => {
    const nextStop = [...prevStop, departure];
    if (tickets.length === 0) {
      return answer.push(nextStop);
    } else {
      tickets.map((ticket, idx) => {
        if (departure === ticket[0]) {
          const copied = [...tickets];
          const [[from, to]] = copied.splice(idx, 1);
          DFS(to, copied, nextStop);
        }
      });
    }
  };
  DFS("ICN", tickets, []);
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

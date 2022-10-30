// binary_gap
function solution(N) {
  let answer = 0;
  const binary = N.toString(2);

  let count = 0;
  for (let i of binary) {
    if (i === "0") {
      count++;
    }
    if (i === "1") {
      answer < count ? (answer = count) : answer;
      count = 0;
    }
  }

  return answer;
}

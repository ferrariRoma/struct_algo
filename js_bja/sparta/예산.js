// 예산
function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  d.reduce((acc, el) => {
    if (acc + el <= budget) {
      acc += el;
      count++;
    }
    return acc;
  }, 0);
  console.log(count);
  return count;
}

// solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);

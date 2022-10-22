// codility - passing cars
function solution(arr) {
  let count = 0;
  let fowardEast = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      fowardEast += 1;
    } else if (arr[i] === 1) {
      count += fowardEast;
    }
  }
  console.log(count);
}

solution([0, 1, 0, 1, 1]);

// ㅇㅎ! 이렇게 하면 0의 갯수 만큼 더해주면 가중치를 구현해 줄 수 있구나.

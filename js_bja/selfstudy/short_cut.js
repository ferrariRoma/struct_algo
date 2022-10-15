// 게입 맵 최단거리
// function solution(maps) {
//   const height = maps.length;
//   const width = maps[0].length;
//   const direction = [
//     [0, -1],
//     [0, 1],
//     [1, 0],
//     [-1, 0],
//   ];

//   let map = wrapEdges(maps);
//   const queue = [[1, 1, 1]];
//   map[1][1] = 0;

//   while (queue.length > 0) {
//     const [x, y, count] = queue.shift();
//     if (x === width && y === height) {
//       return count;
//     }

//     for (let element of direction) {
//       const next = [x + element[0], y + element[1], count + 1];
//       if (map[next[0]][next[1]] === 1) {
//         map[next[0]][next[1]] = 0;
//         queue.push(next);
//       }
//     }
//   }
//   return -1;
// }

// function wrapEdges(maps) {
//   const modified = maps;
//   for (let value of modified) {
//     value.push(0);
//     value.unshift(0);
//   }
//   modified.push(Array(modified.length + 1).fill(0));
//   modified.unshift(Array(modified.length + 1).fill(0));
//   return modified;
// }

// [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
// [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1

// 기존의 풀이로 풀려고 하니까 queue에 있는 것을 다 쓰지 못하기 때문에 그냥 초기 값을 가지고 끝나버린다.
// 하지만 초기 값이 최소값이 아니면, 후속 queue 값도 확인들을 다 해보아야 한다.
// => 아니다!! 큐를 이용해서 하면 15가 나오는 경우와 11이 나오는 경우 모두 뒤로 push를 하고 shift를 해서 꺼내어 쓰기 때문에
// (pop을 하면 push한 것을 바로 탐색할 수 밖에 없다.
// 그러다 보면 나머지 하나의 경우는 영원히 살펴보지 못하는 것이다. 중간에 15의 경우의 수가 push, pop을 반복하면서 길을 다 끊어 두면,
// 11은 결국 중간에 길이 없는 방법이 되지만, shift를 통해서 모든 경우를 하나씩 해나가면
// 결국 15가 같은 지점에 늦게 도달하기 때문에 자연스럽게 11은 살고 15는 죽게 된다.)
// 하나하나를 다 동시에 진행하는 셈이 된다. 맵을 그려놓고 없애가다 보면 알 수 있다!

// function solution(maps) {
//   const WIDTH = maps[0].length;
//   const HIEGHT = maps.length;

//   const directions = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];

//   let map = wrapEdges(maps);

//   let queue = [[1, 1, 1]];
//   map[1][1] = 0;

//   while (queue.length > 0) {
//     const [x, y, count] = queue.shift();
//     if (x === WIDTH && y === HIEGHT) {
//       return count;
//     }

//     for (let value of directions) {
//       const next = [x + value[0], y + value[1], count + 1];
//       if (map[next[0]][next[1]] === 1) {
//         map[next[0]][next[1]] = 0;
//         queue.push(next);
//       }
//     }
//   }

//   return -1;
// }

// function wrapEdges(maps) {
//   const modified = maps;
//   for (let value of modified) {
//     value.push(0);
//     // value.unshift(0);
//     value.splice(0, 0, 0);
//   }
//   modified.push(new Array(modified.length + 1).fill(0));
//   //   modified.unshift(new Array(modified.length + 1).fill(0));
//   modified.splice(0, 0, new Array(modified.length + 2).fill(0));
//   return modified;
// }

function solution(maps) {
  const HEIGHT = maps.length;
  const WIDTH = maps[0].length;
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let map = wrapEdges(maps);
  let queue = [[1, 1, 1]];
  map[1][1] = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x === HEIGHT && y === WIDTH) {
      return count;
    }

    for (let d of direction) {
      const next = [x + d[0], y + d[1], count + 1];
      if (map[next[0]][next[1]] === 1) {
        map[next[0]][next[1]] = 0;
        queue.push(next);
      }
    }
  }
  return -1;
}

function wrapEdges(maps) {
  const modified = maps;
  for (let m of modified) {
    m.unshift(0);
    m.push(0);
  }
  modified.unshift(new Array(modified.length + 1).fill(0));
  modified.push(new Array(modified.length + 1).fill(0));
  return modified;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

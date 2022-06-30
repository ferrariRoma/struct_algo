// 키패드 누르기

/**
 *
 * @param {*} numbers
 * @param {*} hand
 *
 *
 */
function solution(numbers, hand) {
  // 키 패드를 2차원 배열로 구현
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const mainHand = hand;

  // 정답 담을 배열 준비!
  let answer = [];
  // key 위치 값 할당
  let keyPos;
  // key 위치 탐색
  const update = (pos) => {
    // 초기화
    keyPos = [];
    for (let i = 0; i < 4; i++) {
      if (keypad[i].indexOf(pos) !== -1) {
        keyPos = [i, keypad[i].indexOf(pos)];
        return keyPos;
      }
    }
  };

  // 손 위치 초기화
  let currLeft = update("*");
  let currRight = update("#");

  // 왼손 오른손 함수
  // 번호에 따라 answer에 값을 넣고, 각각의 손 위치를 최신화 한다.
  const cbMove = (num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer.push("L");
      currLeft = update(num);
    } else if (num === 3 || num === 6 || num === 9) {
      answer.push("R");
      currRight = update(num);
    }
    // currLeft랑 currRight를 비교해서 가까운 손으로 찍는데,
    // 위치가 같다면 mainHand클로저를 사용!
    else if (num === 2 || num === 5 || num === 8 || num === 0) {
      // 누를 번호랑 각 손의 위치 차의 절대값을 더한 만큼이 거리니까 그걸 비교
      const center = update(num);
      const gapLeft =
        Math.abs(currLeft[0] - center[0]) + Math.abs(currLeft[1] - center[1]);
      const gapRight =
        Math.abs(currRight[0] - center[0]) + Math.abs(currRight[1] - center[1]);
      // 위치 다르면 가까운 걸 씀
      if (gapLeft > gapRight) {
        answer.push("R");
        currRight = update(num);
      } else if (gapLeft < gapRight) {
        answer.push("L");
        currLeft = update(num);
      } else if (gapLeft === gapRight) {
        const main = mainHand[0].toUpperCase();
        answer.push(main);
        if (main === "R") currRight = update(num);
        if (main === "L") currLeft = update(num);
      }
    }
  };

  // numbers 배열로 설정
  const mobile = [...numbers];
  console.log(mobile);
  // mobile에 넣어두었던 배열을 메소드 이용해서 반복하는데, 콜백으로 cbMove를 이용!
  mobile.forEach(cbMove);
  console.log(answer.join(""));
  return answer.join("");
}

// solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
// "L R L L L R L L R R L "
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// "L R L L R R L L L R R"

// 체육복
/* 테스트 케이스 13, 14에서 실패가 뜸
찾아보니 아래와 같은 테스트 케이스를 점검해보라고 함.
lost의 2 학생은 3에게 빌릴 것이고, 그렇게 되면 4번 학생은 빌릴 수 없게 되어, 최대 학생 수를 구하지 못하게 된다.
n = 5, lost = [2,4], reserve = [3,1], result = 5

요지는 다음과 같음.
reverse가 저렇게 정렬이 되지 않은 채로 오면 2,4번 학생이 모두 빌릴 수 있음에도 불구하고, */

function solution(n, lost, reserve) {
  let students = n; // 전체학생
  const stolen = [...lost].sort((a, b) => a - b);
  const capable = [...reserve].sort((a, b) => a - b);

  // 최소 참가 가능학생
  students -= stolen.length;

  // 예외 - 여벌이 있는데, 그걸 도난 당하면 못 빌려줌.
  for (let i = 0; i < stolen.length; i++) {
    // 그런 capable학생은 인자를 -1로 해서 탐색이 안되게 해줌.
    // stolen도 해당 학생 인자는 -1로 하고,
    // 참여할 수 있는 학생이 늘어난 셈이니, students++해주자.
    if (capable.includes(stolen[i])) {
      capable[capable.indexOf(stolen[i])] = -1;
      stolen[i] = -1;
      students++;
    }
  }

  // 빌리기 작업 진행
  for (let i = 0; i < stolen.length; i++) {
    // 작은 친구에게 빌릴 수 있으면 빌려야지 뒤에 큰 친구들도 빌릴 수 여유가 생김.
    // 일단 작은 애들한테 먼저 빌려보자.
    // 있으면 stolen, capable의 해당 학생 -1로 해주고 students++
    if (capable.includes(stolen[i] - 1)) {
      capable[capable.indexOf(stolen[i] - 1)] = -1;
      stolen[i] = -1;
      students++;
    }
    // 작은 애들한테 못 빌린 애들은 큰 애들한테 작업 진행
    if (capable.includes(stolen[i] + 1)) {
      capable[capable.indexOf(stolen[i] + 1)] = -1;
      stolen[i] = -1;
      students++;
    }
  }
  console.log(students);
  return students;
}
solution(5, [2, 4], [3]);

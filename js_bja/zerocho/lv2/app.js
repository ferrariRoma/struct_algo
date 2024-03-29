// 올바른 괄호
/* function solution(s) {
  let count = 0;

  for (let i of s) {
    i === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  return count > 0 ? false : true;
} */

// 124
/* function solution(n) {
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
} */

// 다음 큰 숫자
// 78	83
// 15	23
/* function solution(n) {
  const count = n.toString(2).match(/1/g).length;
  let answer = 0,
    compare = 0;
  while (1) {
    if (compare === count) {
      return (answer = n);
    }
    n += 1;
    compare = n.toString(2).match(/1/g).length;
  }
} */
/* 
해당 문제는 주어진 십진법 숫자를 보다 큰 수 중에서, 이진법으로 변환했을 때 1의 갯수가 같은 가장 가까운 수를 찾는 문제입니다.
toString()메소드를 이용하면 간단하게 이진법으로 변경할 수 있고, 여기서 match() 메소드에 정규 표현식을 이용하면 1만 모아서 따로 배열로 만들어 줄 수 있습니다.
즉 이 배열의 길이가 같다면 1의 갯수가 같은 수 입니다.
while문을 통해서 계속 수를 증가시켜주면서 1의 갯수가 같은지를 확인해 줍니다.

첫 번째로 풀고나서 굳이 while(1)을 통해서 무한히 반복을 할 필요가 있을까 하는 의문이 들었습니다.
그래서 이 부분에 대해서 개선을 하고 싶었는데 제로초 선생님은 이 부분에서 while(n++)을 통해 while문 내에서 이루어지는
n++을 while(여기서) 진행을 해서 내부의 로직을 조금 더 깔끔하게 했습니다.

시간 복잡도는 n이 조건을 만족할 때까지 반복문이 진행되기 때문에 O(n)도 될 수 있고, 더 정확한 값도 있다고 생각한다.
왜냐하면 n에서 조건을 만족하는 다음 수까지 반복문이 돌아가기 때문에 n이라기엔 범위가 너무 크다. 그래서 해당 수의 이진표기를 고려해야
정확한 Big O값이 나올 거 같은데 이걸 어떻게 해야할 지 잘 모르겠다.

찾아보니까 log[2]{n}을 해주면 해당 요소의 이진수로 고쳤을 때의 길이가 나온다고 해서 해보니까 진짜였다. 사실 안그래도 log를 쓰면 되지 않을까 하는 생각을 하기도 했다.

n에서 n+x까지의 수를 이진법으로 환산해서 탐색을 하는 것이기 때문에, O(x*log[2]{n})만큼 있고 그 안에 무조건 정답이 있기 때문에 이렇게 생각합니다. 
x개 만큼의 log[2]{n} 길이의 문자를 탐색해야 하기 때문입니다.
*/

/* function solution(n) {
  const count = n.toString(2).match(/1/g).length;
  // while(여기에) n++과정을 넣고, .match().length도 따로 변수에 할당하지 않고 바로 조건문에 넣어 비교해주면서
  // while문 로직이 굉장히 간결해졌다.
  while (n++) {
    if (n.toString(2).match(/1/g).length === count) return n;
  }
} */

// 숫자의 표현
// 기존 안
/* function solution(n) {
  let answer = 0,
    number = 0,
    sum = 0,
    round = 0;

  while (++number) {
    if (number > n) return answer;

    sum += number;
    console.log(number, sum);

    if (sum === n) {
      answer++;
      sum = 0;
      round++;
      number = round;
    } else if (sum > n) {
      round++;
      number = round;
      sum = 0;
    }
  }
} */

// 투 포인터라는 것을 알고 한 번 풀어보자
// 투 포인터 보다도 규칙이 있었다.
/* function improvement(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    n % i ? null : count++;
  }
  return count;
} */

// 제로초 선생님의 풀이
/* 
내 풀이를 메소드로 다 바꾸신 느낌이다.
*/
/* const improvement = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((el) => !(n % el) && el % 2).length;
}; */

// 최댓값과 최솟값

/* 
s	return
"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1" 
*/

const solution = (s) => {
  let answer = s.split();
  console.log(answer);
  return answer;
};

console.log(solution("1 2 3 4"));

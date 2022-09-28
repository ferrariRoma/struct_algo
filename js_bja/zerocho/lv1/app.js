// 같은 숫자는 싫어
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]

// 내 풀이
// function solution(arr) {
//   const answer = [];
//   let temp;
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (answer[answer.length - 1] !== arr[i]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

// 제초로 풀이
// function solution(arr) {
//   return arr.filter((el, i) => el !== arr[i + 1]);
// }

// console.log(solution([1, 1, 3, 3, 0, 1, 1]));

// 두 정수 사이의 합
// 3	5	12
// 3	3	3
// 5	3	12

// 알아두면 좋은 것 [a,b] =[b,a]는 순서를 바꾸는 좋은 편의 문법이다.
// function solution(a, b) {
// a가 더 클 때를 생각해야 한다.
//   let answer = 0;
//   for (let i = a; i <= b; i++) {
//     answer += i;
//   }
//   return answer;
// }

/* function solution(a, b) {
  return ((a + b) * ((a > b ? a - b : b - a) + 1)) / 2;
}

console.log(solution(3, 5)); */

// 종현님이랑 같이 푼 문제
// 내 풀ㅣ
/* function solution(arr) {
  const answer = [];
  for (let i = 1; i < arr.length; i++) {
    if (!answer.includes(arr[i])) answer.push(arr[i]);
  }
  return answer.length;
}

console.log(solution([])); */

/*
[1,1,1,1,1,2] // 2
[1,2,3,4,4,4,7,7,12,12,13] // 7 
[] // 0 
[-2,-1,-1,0,1] // 4
*/

// 종현님 풀이
/* function countUniqueValues(arr) {
  let one = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] !== arr[one]) {
      one++;
      arr[one] = arr[i];
    }
  }
  return one;
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); */

// 정수 사이의 합 복습하기
/* function solution(a, b) {
  return ((a + b) * ((a > b ? a - b : b - a) + 1)) / 2;
}
console.log(solution(3, 6)); // 12 */

// 문자열 내 마음대로 정렬하기
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

// sort는 음수면 안바뀐다.
/* function solution(arr, i) {
  return arr.sort().sort((a, b) => a[i].charCodeAt() - b[i].charCodeAt());
}
console.log(solution(["abce", "abcd", "cdx"], 2)); */

// 문자열 내 p와 y의 개수
// "pPoooyY"	true
// "Pyy"	false
/* function solution(string) {
  // return string.match(/y/gi).length === string.match(/p/gi).length; // y,p가 없을 때 문제가 된다.
  return string.replace(/y/gi).length === string.replace(/p/gi).length;
} */

// 소수 찾기
// 10	4
// 5	3
/* 
에라토스테네스의 체 ::: 이게 가능한 이유는 자연수의 성질 때문인데,
모든 자연수는 소수들의 곱으로 표현이 된다. 즉, 모든 자연수는 2,3,5,7의 곱으로 표현이 된다는 말인데,

*/

function solution(n) {
  const arr = [];

  // 인덱스 번호가 주어진 숫자 n과 대응하도록
  // 빈 배열을 만들고 원소는 true 값으로 채워준다.
  // 여기서 true 는 소수라는 의미이다.
  // 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
  for (let i = 0; i < n + 1; i += 1) {
    arr.push(true);
  }
  console.log("true를 넣어버림 ::: ", arr);

  // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
  // arr[i] 가 소수일 경우, 반복문을 진행한다.
  // 맨 처음 시작하는 2는 소수이므로,
  // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
  // 제곱근까지 반복한다.
  for (let i = 2; i * i <= n; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
  arr.splice(0, 2, false, false);

  // 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
  const result = arr.filter((value) => {
    return value !== false;
  });

  return result.length;
}
console.log(solution(5));

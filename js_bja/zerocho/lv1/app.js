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
모든 자연수는 소수들의 곱으로 표현이 된다. 즉, 소수가 아닌 모든 자연수는 2,3,5,7의 곱으로 표현이 된다는 말이다.
이 성질을 이용해서 소수를 체를 이용해서 거르는 것 처럼 걸러버리는 것이 에라토스테네스의 체이다.

1. i반복문은 주어진 숫자의 제곱근까지 구해보면 된다.
2. j반복문은 주어진 숫자까지, i의 배수인 숫자만 탐색을 한다. 이 부분 때문에 i반복문에서 제곱근까지 반복문을 돌린다.
*/

/* function solution(num) {
  const arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = Math.pow(i, 2); j <= num; j += i) {
      if (arr[j]) {
        arr[j] = false;
      }
    }
  }
  const answer = arr.filter((el) => true === el);
  return answer.length;
} */

/* function solution(num) {
  const arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = i ** 2; j <= num; j += i) {
      if (arr[j]) {
        arr[j] = false;
      }
    }
  }
  const answer = arr.filter((el) => el === true);
  return answer.length;
} */

/* function solution(num) {
  const arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = i ** 2; j <= num; j += i) {
      if (arr[j]) {
        arr[j] = false;
      }
    }
  }
  const answer = arr.filter((el) => el === true);
  return answer.length;
}
console.log(solution(5)); */

// 약수의 합 :: 잊고 있던 reduce를 remind
// 12	28
// 5	6
/* function solution(num) {
  return Array(num)
    .fill()
    .map((el, i) => i + 1)
    .reduce((sum, value, i, all) => (num % value ? sum : sum + value), 0);
} */

// 정수 제곱근 판별
// 121	144
// 3	-1
/* function solution(num) {
  return Math.sqrt(num) % 1 ? -1 : Math.pow(num + 1, 2);
  // 제곱은 **2로 표현할 수 있다.
} */

// 제일 작은 수 제거하기 :: 나는 sort메소드로 정렬 이후에 pop메소드를 사용해서 제거를 했는데
// 제로초는 Math.min과 filter를 이용해서 해결을 했음
// [4,3,2,1]	[4,3,2]
// [10]	[-1]
/* function solution(arr) {
  const MinNum = Math.min(...arr);
  const answer = arr.filter((el) => el !== MinNum);
  return answer;
} */

// 최대 공약수와 최소 공배수 GCD LCM
// 아래 두 가지 규칙, 성질을 이용하면 쉽게 구할 수 있다.
// 유클리드 호제법 :: 최대 공약수를 구하는 법칙
// 두 수의 곱은 최대공약수와 최소공배수의 곱과 같다.

/* 
[유클리드 호제법]
1. 두 수 중에서 큰 수를 작은 수로 나눈다.
2. 나누고 난 나머지가 0이라면 작은 수가 최대공약수이다.
3. 0이 아니라면, 작은 수를 다시 나머지로 나눈다. => 재귀 사용
4. 이를 반복해서 나머지가 0이 될 때, 그 수가 바로 두 수의 최대 공약수이다.
*/

// 3	12	[3, 12]
// 2	5	[1, 10]
/* function solution(n, m) {
  function Euclidean(a, b) {
    return b % a ? Euclidean(b % a, a) : a;
  }
  const GCD = Euclidean(n, m);
  const LCM = (n * m) / GCD;
  return [GCD, LCM];
}
console.log(solution(2, 5)); */

/* function solution(n, m) {
  const Euclidean = (n, m) => {
    return m % n ? Euclidean(m % n, n) : n;
  };
  const GCD = Euclidean(n, m);
  const LCM = (n * m) / GCD;
  return [GCD, LCM];
} */

// 평균 구하기 :: 평균, 합, 곱 등등은 reduce를 이용해서 처리하면 편합니다.
// [1,2,3,4]	2.5
// [5,5]	5
/* function solution(arr) {
  const answer = arr.reduce((acc, el, i) => {
    if (i === arr.length - 1) {
      acc += el;
      return acc / (i + 1);
    }
    return (acc += el);
  }, 0);
  return answer;
} */

// 하샤드 수 :: x의 자리수 합으로 x가 나누어 떨어지면 x는 하사드 수 입니다. 18 => 1+8 = 9 => 18/9 = 2
/* function solution(x) {
  let answer = !(
    x %
    String(x)
      .split("")
      .reduce((acc, el, i) => {
        return (acc += Number(el));
      }, 0)
  );
  return answer;
} */

// 행렬의 덧셈 :: map 두 번 쓰면서 인덱스를 두 개 사용할 수 있게 되는데, arr2의 인자들에 접근 할 수 있다.
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]
/* function solution(arr1, arr2) {
  const answer = arr1.map((a, i) =>
    a.map((b, j) => {
      return b + arr2[i][j];
    })
  );
  return answer;
} */

// 124 나라의 숫자
// 1	1
// 2	2
// 3	4
// 4	11
// 10 41
// 11 42
// 12 44
// 13 111
// 14 112
// 15 114
// 16 121
// 17 122
// 18 124
// ***** 수식 도출하는 거라서 나는 모르겠다;;; *****
/* console.log(solution(3));
function solution(n) {
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
} */

/* function solution(n) {
  // 재귀로 푸는데 +를 기준으로 앞 쪽에 재귀 들어가는 부분이 앞 자리를 나타내주고,
  // 뒷 부분이 뒷 자리를 나타내 준다.
  // 3으로 나눠 떨어질 때 뒷 자리는 4가 되어야 하기 때문에 (n%3||4)로 표기해 주었다.
  // 앞은 계속 나누어 떨어져야 하는데, 나누어 떨어진다면 그것은 그거대로 0이 되도록 (n-(n%3||3))으로 해서 0이 될 수 있도록 해두었다.
  // 이렇게 설계를 해두면 solution이 재귀가 되면서 자릿수가 큰 수가 들어와도 11111 이렇게 이어질 수 있다.
  // 단순히 1,2,3이렇게 될 때마다 1,2,4,11,12.. 이렇게 올라간다고 생각하지 말고 기존의 수와 어떤 관계를 이루는지를 한 번 확인해보면 훨씬 더 나을 뻔 했다.
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
}
console.log(solution(13)); */

// 가장 큰 정사각형 찾기
// [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]	9
// [[0,0,1,1],[1,1,1,1]]	4

// 1. 일단 하드코딩이라도 해서 풀어보기
function solution(board) {
  let a = 0,
    b = 0;
  const MAX = board.length ** 2;
  for (let i = 0; i <= board.length; i++) {
    const count = board.length - i;
    for (let j = 0; j < MAX; j++) {
      board[a][b] === 1? 
    }
  }
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);

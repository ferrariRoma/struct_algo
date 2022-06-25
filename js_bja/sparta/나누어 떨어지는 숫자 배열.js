// 나누어 떨어지는 숫자 배열
/* array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. */

function solution(arr, divisor) {
  const answer = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

console.log(solution([5, 9, 7, 10], 5));

const arr = [1, 2];
console.log(arr[Symbol.iterator]);
debugger;
// Symbol.iterator라는 함수가 있어야 된다.
// 이게 있어야지 이터레이션 가능!
// 그리고 이터레이션 프로토콜은 이터러블 프로토콜과 이터레이터 프로토콜이 있다.
// 이터러블 : 반복가능해야, Symbol.iterator를 갖고 있어야 한다.

// 이터레이터 : 반복가능한 친구를 이터레이터 오브젝트를 만드는 프로토콜.
// Symbol.iterator 이건 함수임. 그래서 이걸 호출할 수 있고 호출하면
// 이터레이터 오브젝트를 생성해서 반환해준다. 이터레이터 오브젝트에는 next()가 있어야 하는데,
// 이게 이터레이터 프로토콜이다.

// 좀 별난 친구라서 [...]()이렇게 호출함 ㄷㄷ

const obj = arr[Symbol.iterator]();
debugger;
console.log(obj.next());
console.log(obj.next());
console.log(obj.next()); // 마지막 것도 값이 나온다!

/* for (let value of arr) {
  console.log(value);
}
for (let value in arr) {
  console.log(arr[value]);
} */

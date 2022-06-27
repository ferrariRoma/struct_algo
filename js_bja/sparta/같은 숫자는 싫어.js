// 같은 숫자는 싫어!

// forEach, map, 반복문+splice를 사용했지만 답안과 다르거나,
// 마지막 반복문+splice은 [ 3, 0, 1, 1 ]이렇게 출력이 되어서 생각을 해보니,
/*
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) arr.splice(i,1);
  }
  return answer;
}
*/
// 이렇게 풀면 arr이 splice()메소드를 통해서 변화하는 동안
// 이미 반복문에 맵핑된 arr.length에 충돌이 일어나서
// [1, 1, 3, 3, 0, 1, 1]에서 앞에 세 개 요소인 [1,1,3]은 지워지고
// [3,0,1,1]만 남는 것으로 판단. length와 answer을 만들어서
// 반복문을 도는 arr에 대한 독립성을 보장
function solution(arr) {
  const length = arr.length;
  const answer = [];
  for (let i = 0; i < length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

// 다른 풀이는 엄청 쉽게 품. filter;;
function solution(arr) {
  return arr.filter((el, i) => el !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));

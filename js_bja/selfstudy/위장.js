function solution(clothes) {
  const setMap = new Map([]);
  const clothesArr = clothes;
  // 각각의 의상 종류가 몇 개 있는지 확인
  clothesArr.map((el) =>
    setMap.has(el[1])
      ? setMap.set(el[1], setMap.get(el[1]) + 1)
      : setMap.set(el[1], 1)
  );
  const countResult = setMap.values();

  let answer = 1;
  for (let a of countResult) {
    answer *= a + 1;
  }
  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
/* 
[의상 이름, 의상 종류]
의상 수는 1개 이상 30개 이하
영어 소문자이고 띄어쓰기는 _로 했음.
[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]] 5
headgear가 2개
eyewear가 1개

[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]] 3
face가 3개
*/

/* 
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
*/

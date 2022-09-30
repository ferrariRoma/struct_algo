/* const counter = [[]];

// d는 자리수 입니다.
const radixLSD = function (arr, d) {
  let mod = 10;
  for (let i = 0; i < d; i++, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      let bucket = parseInt(arr[j] % mod);

      if (counter[bucket] == null) {
        counter[bucket] = [];
      }

      counter[bucket].push(arr[j]);
    }

    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}; */

const counter = [[]];

function radixLSD(arr, d) {
  let mod = 10;
  for (let i = 0; i < d; i++, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      // 10단위로 나누기
      let bucket = parseInt(arr[j] % mod);
      // 나머지에 따라 빈 배열을 만들어주고,
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      // 그 배열에 해당 숫자 push 해주기
      counter[bucket].push(arr[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      // 해당 counter배열에 숫자가 든 배열이 있으면
      if (counter[j] != null) {
        // 그 수를 value에 넣어주고(null이 아닐 때 반복을 해서 수를 다 빼준다.)
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  console.log(arr);
  return arr;
}

radixLSD([125, 383, 274, 96, 0, 9, 81, 72], 3); // [0,9,72,81,96,125,274,383]

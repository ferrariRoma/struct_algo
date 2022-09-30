// 계수 정렬(counting sort)

/* function countingSort(arr, k) {
  let count = [],
    result = [];
  // 먼저, 모든 숫자의 개수를 0으로 초기화
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }

  // 숫자의 개수를 세어 저장합니다.
  for (let j = 0; j < arr.length; j++) {
    count[arr[j]] += 1;
  }

  // 누적합을 구합니다.
  for (i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }

  // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를 집어넣는다.
  for (j = 0; j < arr.length; j++) {
    result[count[arr[j]] - 1] = arr[j];
    count[arr[j]] -= 1;
  }
  return result;
} */
/* function countingSort(arr, k) {
  let result = [],
    count = [];
  // <=을 쓰는 이유는 숫자 갯수 만큼 0으로 초기화 하기 위해서이다.
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }
  console.log("1단계_ 0으로 초기화: ", count);
  for (let j = 0; j < arr.length; j++) {
    count[arr[j]] += 1;
  }
  console.log("2단계_ 카운트: ", count);
  for (i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  console.log("3단계_ 종합: ", count);
  for (j = 0; j < arr.length; j++) {
    result[count[arr[j]] - 1] = arr[j];
    count[arr[j]] -= 1;
  }
  return result;
} */

// 3차 복습
/* function countingSort(arr, k) {
  let result = [],
    count;
  count = new Array(k[0] + 1).fill(0);
  console.log("1단계: ", count);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  console.log("2단계: ", count);

  for (i = 0; i < 4; i++) {
    count[i + 1] += count[i];
  }
  console.log("3단계: ", count);

  for (i = 0; i < arr.length; i++) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]] -= 1;
  }
  console.log("4단계: ", result);
  return result;
} */

// 4차 복습
/* function countingSort(arr, k) {
  const answer = [];
  const countIndex = Array(k[0] + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countIndex[arr[i]]++;
  }
  console.log("countIndex :: ", countIndex);

  for (let i = 0; i < countIndex.length - 1; i++) {
    countIndex[i + 1] += countIndex[i];
  }
  console.log("누적 합 계산하기 :: ", countIndex);

  for (let i = 0; i < arr.length; i++) {
    answer[countIndex[arr[i]] - 1] = arr[i];
    countIndex[arr[i]] -= 1;
  }
  console.log("answer배열 :: ", answer);
} */

function countingSort(arr, k) {
  const answer = [],
    countIndex = Array(k[0] + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countIndex[arr[i]]++;
  }

  for (let i = 0; i < countIndex.length - 1; i++) {
    countIndex[i + 1] += countIndex[i];
  }

  for (let i = 0; i < arr.length; i++) {
    answer[countIndex[arr[i]] - 1] = arr[i];
    countIndex[arr[i]] -= 1;
  }

  return answer;
}

console.log(countingSort([3, 4, 0, 1, 2, 4, 2, 4], [4]));

// bubble sort
/* const bubbleSotr = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSotr([5, 1, 7, 4, 6, 3, 2, 8])); */

/* const bubbleSort = (arr) => {
  let i, j, temp;
  for (i = 1; i < arr.length; i++) {
    for (j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  const result = arr;
  return result;
}; */

/* function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 5, 1, 7, 4, 6, 3, 2])); */
/* 
복습 결과 예제에서는 가장 큰 8이 가장 뒤에 있었기 때문에 
두번째 반복문에서 arr.length-i-1을 해도 괜찮았다.
근데 8을 다른 곳에 두니까 정렬이 완벽하게 안됐다. 
그래서 -1을 하지 않고, arr.length-i만 하니까
처음 루틴에서는 끝까지 반복문이 돌면서 8을 가장 뒤로 보내주었다.

재밌는 점은 첫번째 반복문에서는 arr.length-2를 해줘도 됐다.
예제에서는 -1을 하긴 했는데 -2는 [3,1,2]처럼 짧은 배열에도 먹혔다.
이유는 잘 모르겠으나 -2를 해도 완전히 정렬이 되니 이렇게 썼다.
 */

// 4차 복습
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([8, 5, 11, 1, 7, 4, 6, 9, 10, 3, 2]));

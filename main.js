const arr = [1, 2];
// const test = {
//   1: "one",
//   2: "two",
// };
// for (let a of test) {
//   console.log(a);
// }
console.log(arr[Symbol.iterator]);
debugger;

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

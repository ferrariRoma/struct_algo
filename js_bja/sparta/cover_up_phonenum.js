function solution(phone_number) {
  const length = phone_number.length;
  return [...phone_number]
    .map((el, index) => (index < length - 4 ? (el = "*") : el))
    .join("");
}
console.log(solution("01033334444"));

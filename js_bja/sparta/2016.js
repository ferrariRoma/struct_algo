// 2016년
function solution(a, b) {
  // const result = new Date(2016, a - 1, b).getDay();
  // switch (result) {
  //   case 0:
  //     return "SUN";
  //   case 1:
  //     return "MON";
  //   case 2:
  //     return "TUE";
  //   case 3:
  //     return "WED";
  //   case 4:
  //     return "THU";
  //   case 5:
  //     return "FRI";
  //   case 6:
  //     return "SAT";
  // }
  // return;

  const date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

console.log(solution(5, 24));

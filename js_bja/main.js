const obj = {
  one: 1,
  two: {
    two_first: 21,
    two_second: 22,
  },
};

const { two_first, two_second } = obj;
console.log(two_first, two_second);

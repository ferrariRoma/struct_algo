function outter() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  return inner();
}
outter();

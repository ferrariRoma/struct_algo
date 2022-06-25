class User {
  property1 = "name outside constructor";
  constructor(name) {
    // property2 = "name inside constructor";
    this.name = name;
  }
  sayHi() {
    console.log("hello world");
  }
}

const user = new User();
console.log(user.property1);

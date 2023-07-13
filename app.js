console.log("hello world");

const product = (x, y) => {
  return x * y;
};

console.log(product(2, 4));

const obj = {
  name: "nafees",
  age: 24,
  details: function () {
    console.log("my name is", this.name, "and am", this.age, "yrs old");
  },
};

console.log(obj);
obj.details();

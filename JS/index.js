// function test() {
//   const c = 25;

//   const book = { title: "Java programming" };

//   book.title = "Spring framework";

//   book = { title: "Python" };

//   if (true) {
//     var x = 20;
//     let y = 20;
//   }
//   console.log(x);

//   console.log(book);
//   console.log(book.title);
// }

// test();

test();

function test() {
  console.log("Hello");
}

//console.log(add(10, 20));

const add = (a, b) => a + b;
console.log(add(10, 20));

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((e) => console.log(e * e));

// //ES6 new feature Spread operator

// const color = ["red", "blue"];

// const extraColor = [...color, "yellow", "Black"];

// console.log(color);

// console.log(extraColor);

//Rest operator
function test2(arg1, ...args) {
  console.log(arg1);
  console.log(args);
}

test2(21, 23, 34, 55, 34, 78);

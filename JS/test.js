//default export function and named import
import add from "./math.js";

import * as math from "./math.js";

console.log(add(10, 29));
console.log(math.multiply(10, 29));
console.log(math.subtract(10, 29));

//Template literal, Sting interpolation, multi line strings
const name = "Preeti";

const greeting = `Hello  ${name} How are you !! `;

console.log(greeting);

const user = {
  name: "Preeti",
  age: 20,
  city: "Sterling",
};

const userInfo = `Information  -> Name  ${user.name}, Age : ${user.age}, City : ${user.city} `;
console.log(userInfo);

//Array.find method

const list = [
  { id: 1, task: "Learn Java", completed: true },
  { id: 2, task: "Learn Spring", completed: true },
  { id: 3, task: "Learn Javascript", completed: false },
];

//const listById = list.find((l) => l.id === 1);
const listByTask = list.find((l) => l.completed === true);

//console.log(listById);
console.log(listByTask);

const completedTaskFiter = list.filter((l) => l.completed === true);
console.log(completedTaskFiter);

//map - transforming an array
const mappedList = list.map((l) => {
  return { id: l.id, task: l.task };
});

console.log(mappedList);

const mappedList2 = list.map((l) => {
  return { ...list, priority: "high" };
});

console.log(mappedList2);

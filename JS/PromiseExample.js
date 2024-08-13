// const promise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     //resolve("Operation successful");
//     rejected("opreation failed");
//   }, 200);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("Error Occured");
//   });

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err);
    });
}

fetchData();

async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const json = await response.json();

    console.log(json);
  } catch (err) {
    console.log(err);
  }

  fetchDataAsync();
}

const axios = require("axios");

axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    // handle success
    console.log(response.data.userId);
    console.log(response.data.id);
    console.log(response.data.title);
    console.log(response.data.completed);
  })
  .catch(function (error) {
    // handle error
    console.log(error.response.status);
    console.log(error.response.statusText)
  })
  .then(function () {
    // always executed
  });

axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {
    // handle success
    console.log(response.data.id);
    console.log(response.data.name);
    console.log(response.data.username);
    console.log(response.data.email);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!")
    console.log(error.response.status);
    console.log(error.response.statusText)
  })
  .then(function () {
    // always executed
  });
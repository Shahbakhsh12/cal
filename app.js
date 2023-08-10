// function greet(greetings) {
//   alert(greet);
// }

// function getName() {
//   var inputField = document.getElementById("username");
//   console.log(inputField.value);
//   inputField.value = "";
// }

// var pare = document.getElementById("pare");
// pare.innerHTML += "Lorem lumos very dangers";

// function getName() {
//   var inputField = document.getElementById("username");
//   console.log(inputField.value);
//   inputField.value = "";
// }

// function getName() {
//   var firstName = document.getElementById("username");
//   console.log(firstName.value);
//   firstName.value = "";
// }

function getNumber(num) {
  var result = document.getElementById("result");
  result.value += num;
}

function getResult() {
  var results = document.getElementById("result");
  results.value = eval(results.value);
}

function ClearBtn() {
  result.value = "";
}

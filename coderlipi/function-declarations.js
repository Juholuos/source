/*
function sayHello() {
  console.log('----------------------');
  console.log('hello!');
  console.log('----------------------')
}
*/

// sayHello();
/*
let a = sayHello;
a();
a();
a();
*/

/*
function sayHello(name) {
  console.log('----------------------');
  console.log('hello ' +name+ '!');
  console.log('----------------------')
}

sayHello('bob');
sayHello('beth');
sayHello('Mr Tibbles');
*/



//return harjoittelua
/*
---------------------------------------------------------------------
var number = 4;
var anotherNumber = 3;

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return(n1 * n2);
}

let sum = add(number, anotherNumber)
var product = multiply( prompt("Enter a number:"), sum);
console.log(product);
---------------------------------------------------------------------
*/


function calculateTax(amount) {
  let result = amount * 0.0825;
  return result;
}

let tax = calculateTax(100);
console.log(tax)

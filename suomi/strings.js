const 
    firstName = 'John', 
    lastName = 'Smith';
    age = 45;;

  console.log(firstName, lastName, age);

// Yhdistäminen (Concatenation)
let p = 'My name is ' + firstName + ' ' + lastName + ' and I\'m ' + age + ' years old';
console.log(p);

// Template string
let p2 = `My name is ${firstName} ${lastName} and I'm ${age} years old.`;
console.log(p2);

// String methods

const myString = 'Hello all students!';


// Length
let merkkijono = `Merkkijonon pituus on ${myString.length} merkkiä`;
console.log(merkkijono);

// Case
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

// Substring
let myString2 = myString.substring(0, 10).toUpperCase();
console.log(myString2)

// Split
const myString3 = myString.split('');
console.log(myString3)

const tags = 'js, html, css,';
console.log(tags.split(', '))
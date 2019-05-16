// console.log("Hello World!!!");
var firstName = 'John'; //string
console.log(firstName);

var lastName = 'Smith';
var age = 28; //number
var fullAge = true; //boolean

console.log(fullAge);

var job;  //undefined
console.log(job);
job = 'Engineer';
console.log(job);

// var 3years = 3; //error
// var % rate = 10;  //error
// var John/Smith = 'John and Smith';  // error
// var function = 23;  //error




/*
type coercion
*/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);


/*
Variable mutation
*/

age = 'twenty eight';

alert(firstName + ' ' + age);


/*
Basic operators
*/

var now, ageJohn, ageSmith, older, bornJohn, bornSmith;
now = 2018;
ageJohn = 28;
ageSmith = 33;

bornJohn = now - ageJohn;
bornSmith = now - ageSmith;

console.log(bornJohn);
console.log(now + 2);
console.log(now * 10);
console.log(now / 10);


older = ageJohn < ageSmith;
console.log(older);


/*
typeof
*/

var x = 5;
console.log(typeof x);
console.log(typeof (x));
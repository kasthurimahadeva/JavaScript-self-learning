var weightJohn = prompt("Enter the weight of John in kg");
var heightJohn = prompt("Enter the height of John in m");
var weightMark = prompt("Enter the weight of Mark in kg");
var heightMark = prompt("Enter the height of Mark in m");

var BMIJohn = weightJohn / (heightJohn * heightJohn);
var BMIMark = weightMark / (heightMark * heightMark);

console.log(BMIJohn, BMIMark);

var isMarkHighBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI is higher than John's? " + isMarkHighBMI);
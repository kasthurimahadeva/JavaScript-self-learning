var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;

if (avgJohn > avgMike) {
  console.log('John\'s team is the winner and winning score is ' + avgJohn);
} else if (avgJohn < avgMike) {
  console.log('Mike\'s team is the winner and winning score is ' + avgMike);
} else {
  console.log("Match is draw and score is " + avgJohn);
}

var avgMary = (97 + 134 + 105) / 3;

if ((avgJohn > avgMike) && (avgJohn > avgMary)) {
  console.log('John\'s team is the winner and winning score is ' + avgJohn);
} else if ((avgMike > avgJohn) && (avgMike > avgMary)) {
  console.log('Mike\'s team is the winner and winning score is ' + avgMike);
} else if ((avgMary > avgJohn) && (avgMary > avgMike)) {
  console.log('Mary\'s team is the winner and winning score is ' + avgMary);
} else {
  console.log("Match is draw and scores are " + avgJohn, avgMike, avgMary);
}
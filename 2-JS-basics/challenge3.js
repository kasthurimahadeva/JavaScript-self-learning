var bills = new Array(124, 48, 268);
var tips = [];
var finalBills = [];

tips.push(findTips(bills[0]));
tips.push(findTips(bills[1]));
tips.push(findTips(bills[2]));

finalBills.push(bills[0] + tips[0]);
finalBills.push(bills[1] + tips[1]);
finalBills.push(bills[2] + tips[2]);

console.log('Tips : ' + tips);
console.log('Final bills : ' + finalBills);

function findTips(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if ((bill >= 50) && (bill < 200)) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}
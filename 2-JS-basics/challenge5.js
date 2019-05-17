var johnBillValues = {
  bills: new Array(124, 48, 268, 180, 42),
  calTips: function(bill) {
    if (bill < 50) {
      return bill * 0.2;
    }
    else if ((bill >= 50) && (bill < 200)) {
      return bill * 0.15;
    }
    else {
      return bill * 0.1;
    }
  },
  tips: [],
  finalBills: []
};

var markBillValues = {
  bills: new Array(77, 375, 110, 45),
  calTips: function(bill) {
    if (bill < 100) {
      return bill * 0.2;
    }
    else if ((bill >= 100) && (bill < 300)) {
      return bill * 0.1;
    }
    else {
      return bill * 0.25;
    }
  },
  tips: [],
  finalBills: []
};

var johnAvgTips = calTipsAvg(johnBillValues);
var markAvgTips = calTipsAvg(markBillValues);

if (johnAvgTips > markAvgTips) {
  console.log('John gave higher tips : ' + johnAvgTips);
} else if (johnAvgTips < markAvgTips) {
  console.log('Mark gave higher tips : ' + markAvgTips);
} else {
  console.log('Same avg tips : ' + johnAvgTips);
}

function calTipsAvg(obj) {
  var sum = 0;
  for (var i = 0; i < obj.bills.length; i++) {
    obj.tips.push(obj.calTips(obj.bills[i]));
    obj.finalBills.push(obj.bills[i] + obj.tips[i]);
    sum += obj.tips[i];
  }

  return (sum / obj.bills.length);
}
var john = {
  fullName: 'John Smith',
  mass: 60,
  height: 1.53,
  calBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var mark = {
  fullName: 'Mark Mary',
  mass: 65,
  height: 1.65,
  calBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};


if (john.calBMI() > mark.calBMI()) {
  console.log(john.fullName + '\'s BMI is higher and BMI is ' + john.calBMI());
} else if (john.calBMI() < mark.calBMI()) {
  console.log(mark.fullName + '\'s BMI is higher and BMI is ' + mark.calBMI());
} else {
  console.log('Same BMI and BMI is ' + john.calBMI());
}
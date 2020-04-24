function hourSalary(moneyPerHour,hours){
  this.hours = hours;
  var money = moneyPerHour;
  this.setMoney = function(cmoneyPerHour){
    money = cmoneyPerHour;
  }
  this.getMoney = function(){
    return money;
  }
}
hourSalary.prototype.getResultAmount = function(){
  var dayMoney = this.hours*this.getMoney();
  var monthMoney = 20*dayMoney;
  return 12*monthMoney;
}

function monthSalary(omoney){
  var money = omoney;
  this.setMoney = function(cmoney){
    money = cmoney;
  }
  this.getMoney = function(){
    return money;
  }
}
monthSalary.prototype.getResultAmount = function(){
  return 12*this.getMoney();
}

var employee1 = new hourSalary(25, 5);
console.log ('First employee is getting ' + employee1.getResultAmount());
var employee2 = new monthSalary();
employee2.setMoney(5500);
console.log('Second employee is getting ' + employee2.getResultAmount());
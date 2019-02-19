function add(number){
  var totalSum=number;

  function sum(number){
      totalSum+=number;
      return sum;
  }
    sum.toString = function() { return totalSum };
    return sum;
}

console.log(add(1)(-2).toString());
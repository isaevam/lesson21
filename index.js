"use strict";
//Closure
function calculate (initialNumber) {
 let number=initialNumber;
return{
  add: function(n){
  number+=n;
return number;
},
subtract: function(n){
  number-=n;
  return number;
 },
multiply: function(n){
  number*=n;
    return number;
  },
divide: function(n){
number/=n;
    return number;
  },
reset: function(){
   return  number=0;
  }}};
const calculator = calculate(5);
console.log(calculator.add(4));
console.log(calculator.subtract(7));
console.log(calculator.multiply(4));
console.log(calculator.divide(5));
console.log(calculator.reset());

//Decorator
const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};
const sum =function(num){
  return this.num + num;
};
const cachesDecorator = (func) => {
  const map=new Map();
  return function(num){
  if (map.has(num)){
    return map.get(num);}
    else{
  const value=func.call(this,num);
  map.set(num,value);
  return value;
  }
}};
const decoratedSum = cachesDecorator(sum);
console.log(decoratedSum.call(obj,8));
console.log(decoratedSum.call(obj,8));
const decoratedSum2 = cachesDecorator(obj.sum);
console.log(decoratedSum.call(obj, 5));
console.log(decoratedSum.call(obj, 5));

//Factorial recursion (optional)
function factorialRecursion(number) {
  const num=Number(number);
  if (num===1){
    return 1;
  }
  const factorial=factorialRecursion(num-1);

return document.getElementById("outputFactorial").value = factorial*num;}

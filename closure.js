//closure is the combination of a function bundled together with references to its surrounding state
function stopWatch(){
 let counter=0;
 return function(){
  counter++;
  return counter;
 }
}
let count1=stopWatch();
console.log(count1())//displays 0
console.log(count1())//displays 1 continue from the last due to the closure
console.log(count1())
let count2=stopWatch();
console.log(count2())//start newly
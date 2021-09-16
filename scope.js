const favNumber=28;
function add (first,second){
 const result=first+second;
 // console.log(favNumber) declared globally. so, can be accessed from any place 
 if(result>9){
  const mood='happy'
  console.log(mood)//inside the scope of block
 }
 return result;
 
}
const sum=add(8,7);
// console.log(result)-->not possible because result is in local scope of the function
// console.log(sum)
//console.log(mood)outside the block scope
//a variable declared with var is free from the block scope
for(let i=0;i<=10;i++){
 
}
console.log(i)
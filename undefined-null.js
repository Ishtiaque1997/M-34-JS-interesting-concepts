// 1. variable value not assigned
// 2. no return from the function
//3. return is written but nothing after that
//4. Parameter that is not passed
//5. try  to access property that doesn't exist in an object
// 6. when there is no element in an array index
// 7. accessing deleted array element
// 8. explicitly set value to undefined

let first;
// console.log(first)

function second(x,y){
 // document.getElementById('sum')
}
const res=second(8,9);
// console.log(res)

function add(a,b){
 const sum=a+b;
 return;
 if(b<10){
  return;
  const fun=a*b;
  return sum;
 }
}
const fourth=add(2,7);
// console.log(fourth)


function double(a,b){
 const result=a*2;
 // console.log(b)
 return result
}
double(8)

const fifth={
 name:'Sakib',age:15,location:'dhaka'
}
// console.log(fifth.phone)

const sixth=[12,34,45,67,89,90];
// console.log(sixth[7])

delete sixth[3];
// console.log(sixth[3])


const seven=undefined;
// console.location(seven)


const myIbj={name:'samad',job:null}
//null is special type that means nothing but undefined means not defined
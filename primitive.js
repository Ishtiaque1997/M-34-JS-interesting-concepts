/*
seven types of data type
//primitive data types(primitive means basic and they are immutable)
Number
String
Boolean
undefined
null

symbol
*/
// 
//object is non-primitive
//primitive
let a='hello';
let b=a;
// console.log(a,b)
a='gello';
console.log(a,b)

//non-primitive
const x={job:'web developer'}
const y=x;
console.log(x,y)
x.job='back end developer'
console.log(x,y)

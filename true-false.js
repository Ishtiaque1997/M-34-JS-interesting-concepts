// falsy: false,0,empty string,variable undefined,null,Not a number

// truthy: true/any number/any string with white space,[]empty array,{}empty object,anything else not falsy

let x={}
console.log('value of x',x)
if(x){
 console.log('var is true')
}
else{
 console.log('var is false')
}
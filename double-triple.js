//double equal just compares the value but triple equal compares both type and value
//double equal converts implicitly. They do typecasting.
 
const first=1;
const second=true;
if(first==second){
 console.log('is true')

}
else{
 console.log('is false')
}
//more comparison
//non-primitive data cannot be compared with double equal
const a={name:'ali'};
const b={name:'ali'};
if(a==b){
 console.log('same')
}
else{
 console.log('not same')
}
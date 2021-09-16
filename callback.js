//calling a function from another function as parameter is callback function.
function welcomeMessage(name,greetHandler){
 // console.log(greetHandler);
 greetHandler(name);
}
//const names=['Tom Hanks','Ian Smith','Bradly Cooper'];
const myObj={name:'Tom duffer',age:11}
function greetMorning(name){
 console.log('Good morning',name)
}
function greetAfternoon (name){
 console.log('Good afternoon',name)
}
function greetEvening(name){
 console.log('Good evening',name)
}
welcomeMessage('Tom Hanks',greetMorning)
welcomeMessage('Tom Bardy',greetAfternoon)
welcomeMessage('Tommy Bardy',greetEvening)
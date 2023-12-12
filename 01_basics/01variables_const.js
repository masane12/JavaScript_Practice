// user register on website he will type name,address,phone etc which we have store in some memory space

// Constant and Variables;
// Constant - that we don't want to change 
// Variables - can change if we want 

const accountId = 144553;  // can't change

// 2 Ways to declare variable let and var 
// in memory space was declared for accountEmail and can change it also
let accountEmail = "harshada@gmail.com" 
/*
Prefer not to use var because of issue in block scope and functional scope
*/
var accountPassword = "harsh123"

// javaScript language  is so saved that without using any datatype we can declared variable 
// not good practice
accountCity = "Jaipur"
let accountState;  //value will be undefined

//accountId = 2;  // not allowed 

console.log(accountId);
accountEmail = "nikita@gmail.com"
accountPassword = "niki@123"
accountCity = "Pune"


// show all this table format
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
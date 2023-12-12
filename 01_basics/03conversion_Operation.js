let score = null;


// const {score} = req.body
// sometime we don't know in which format client send the data 

console.log(typeof score);
console.log(typeof (score));

// If score we want  only number then Number(score) then if we type score in string then also it take it as number 
let valueInNumber = Number(score); 
console.log(typeof valueInNumber);  

// for boolean score = true then valueInNumber = 1, false = 0
// for score = null then valueInNumber = 0
// for score = undefined then valueInNumber = NaN
// for score = "33abc" then valueInNumber = NaN
console.log(valueInNumber); //NaN (Not a Number)



let isLoggedIn = "harshada";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  

// let isLoggedIn = 1; => boolenIsLoggedIn = true
// let isLoggedIn = 0; => boolenIsLoggedIn = false
// let isLoggedIn = ""; => boolenIsLoggedIn = false
// let isLoggedIn = "harshada"; => boolenIsLoggedIn = true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string


// **************************** OPERATIONS ***************************************

let value = 3;
let negValue = -value
console.log(negValue);  // -3

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**3);//2 to the power 3 // 8
// console.log(2/2); //1
// console.log(2%3); //2

let str1 = "hello";
let str2 = " Harshada"
let str3 = str1 + str2;
console.log(str3);  // hello Harshada

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122 (here string is 1st so consecutive are also converted into string)
console.log(1 + 2 + "2");  //32 (last is string so 1st 2 no addition is done)


console.log(+true);  // 1
console.log(+"");  // 0
 
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101



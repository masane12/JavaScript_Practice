/* How data was store in memeory and access on this basis 
Data was divided into 2 Parts
1. Primitive (call by Value)
 changes was done on copy 
   String
   Number
   Boolean
   Null
   Undefined
   Symbol
   BitInt

2. Non-Primitives(Reference Type)
 Reference was directly allocate in Memeory
   Array
   Objects
   Functions

JavaScripts is Statically Type or Dynamically Type?
  JavaScript is a dynamically typed language, which means that data types of variables are determined 
  by the value they hold at runtime and can change throughout the program as we assign different values 
  to them.
  
  const score = 100
  const isLoggedIn = false 

  here we not defined that score is number and isLoggedIn is boolean it is determined by the value it's stored
  so it is dynamically type language

*/

const id = Symbol('123')
const anotherId = Symbol('123')
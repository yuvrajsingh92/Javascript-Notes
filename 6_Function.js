// Functions are the block of code that is writen using "function" key word and after that 
// function name 

// why function is important? because we don't want directly to run over code, 
// the code should run when it's called, 

// This way of creating function is called "funtion declaration"

// function ayush(){
//     console.log("Ayush is my name :");
    
// }

// To run this code we have to call it by writing function name that is "ayush"

// ayush()

// Their are another way of creating function and is called is function "function expression"

// let fnc=function(){
//     console.log("Ayush");
// }
// fnc()


// Arrow function or fat arrow function. This is also a way to create function and 
// this is important going to use it many times

// let arr=()=>{
//     console.log("Ayush");
// }
// arr()

// Parameter and arguments

// function dance(who_is_dancing){
//     console.log(`${who_is_dancing} is dancing`);
// }

// dance("Horse")
// dance("Zebra")
// dance("Donkey")
// dance("Cow")

// This is how we can give value to a function in for of parameter

// let sum=function(v1,v2){
//     console.log(v1+v2)
// }
// sum(2,3)
// and this are parameter and arguments. parameter is v1 and v2  and arguments are sum(2,3)


// We can also send default value in parameter, it works when the argument is not pass 
// and if the value is passed the default value get overwrite 

// let arrow=(v1=0,v2=0)=>{
//     console.log(v1+v2);
// }
// arrow()

// Rest and spread 

// if we have to many arguments like 1,2,3,4,5,6,7,8,9,10 
// so we have to create the number of parameters to match arguments, 
// to avoid it we use ... to avoid it

// let fnc = (...v1)=>{
//     console.log(v1); // we will get output this : (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// }
// fnc(1,2,3,4,5,6,7,8,9,10)

// We will get a array and we don't have to create as much parameter based on argument 
// and it called as rest oprator

// First class functions 

// fisrt class function are just the normal functions 
// but they can be passed as a parameter or funtions

// let arrow=(val)=>{
//     val() // we have to pass the parameter as a function to access it
// }
// arrow(function(){
//     console.log("This is first class function passed as argument");
// })

// Higher Order function

// higher order function are the functions that accesses or return function 
// within it's parameter

// This is example of return function

// function abcd(){
//     return function(){
//         console.log("Ayush");
//     }
// }

// abcd()() 

// accesses throw arguement 

// function abcd(val){
//     val()
// }
// abcd(function(){
//     console.log("Ayush");
// })

// Pure functions and impure functions

// Pure functions are the function which don't change any value outside of it

// let a = 0
// function pure(){
//     console.log("Ayush");
// }

// pure()

// so this function don't change anything and only run the code which is it's block

// Impure function

// let a=1;

// function impure(){
//     a++
// }
// impure()
// console.log(a);

// Closures : A function that return another function and that functions uses parents variable 

// function parent(){
//     let a = 2 
//     return function(){
//         console.log(a);
//     }
// }
// parent()()

// Lexical scope function

// function abcd(){
//     let a = 1; // a can be accesses in hole abcd function
//     function efgh(){
//         let b = 2; // b can be accesses in hole funtion efgh function
//         function ijkl(){
//             let c = 3; // c can be accesses in only ijkl funtion
//         }
//     }
// }

// IIFE (Immediately Invoked Function Expressions)

// Usecase 

// (function(){

// })(); // We don't have to name anything to the function and it is used to call immediately


// Hoisting : creating a function and calling it before it code is called hoisting

// abcd() // In this case hoisting will perform
// function abcd (){ // This is called function declartion
//    console.log("Ayush");
// }

// In function expression we can't perform hoisting 

// abcd() // This will show error 

// let abcd =function(){
//     console.log("Ayush"); // This is called function expression
// }


// Practices Question

// Q1. What's the diffrents between function declaration and function expression in term of hoisting
// Ans : Function expression can't be hoisted and it will show error and 
// function declaration can be hoisted and it will not show any error

// Q2. Convert the following function into an arrow function

// function multiply(a,b){
//     return (a*b);
// }

// let multiply = (a,b)=>{
//     return (a*b)
// }

// Predict the output

// function SayHi(Name="Guest"){
//     console.log("Hi",Name);
// }

// SayHi(); // Output : Hi Guest

// Use rest parameter to accept the number of score and return the total

// function total(...val){
//     let sum =0 
//     for (let i=0;i<val.length;i++){
//         sum=sum+val[i]
         
//     }
//     return sum
// }
// console.log(total(88,22,47,43,67))

// What will this function will return

// function fnc (){
//     return 
// }
// console.log(fnc()) // Undefined
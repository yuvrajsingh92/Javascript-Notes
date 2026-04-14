// variable 

// Their is mainly three types of variable declartion ⁡⁢⁢⁢(var ,let, const)⁡

// ⁡⁢⁢⁢Var⁡ 

// var a; // this is called as variable declaration
// var a= 12; // this is called as variable initialization

// var gets added in window
// var is functional scoped
// var can be redeclar and it will not show any error

// ⁡⁢⁢⁢let⁡

// let a=20;
// let a =23; ⁡⁢⁣⁢Error⁡

// let can't be redeclare like var it will show error
// let is functional scoped variable 

// ⁡⁢⁢⁢Const⁡

// const variable is used to declar a variable who's value will remain constaint and it's not going to change 

// const pi=3.14

// ⁡⁢⁢⁢Scope(Global, block, functional)⁡

// var is functional scoped
// let is functional scoped variable

// ⁡⁢⁢⁢Temporal Dead Zone⁡
// Temporal dead zone is zone where we are asking value and the value is initialized 
// after asking so the space which is made between asking and intializing is called 
// temporal dead zone and it's only worked in let and const and not in var

// console.log(a);
// let a=20;

// console.log(z);
// var z= 10

// ⁡⁢⁢⁢Hoisting⁡
// hoisting is a part where the variable is divided into 2 part
// Example

// console.log(a);

// var a= 12;

// in this process what is happing is var a= undefined and a = 12; 
// so that's why it does give error like let

// In hoisting 
// var -> undefined
// let -> error
// const -> error
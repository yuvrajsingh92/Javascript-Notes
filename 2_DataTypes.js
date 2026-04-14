// Their are two types of data
// ⁡⁢⁢⁢Primitive types (String, Number, Boolean, null, undefined, Symbol, BigInt)⁡
// Primitive value is value where we can copy the data
// Example

// let a = 10;
// let b = a; // ⁡⁢⁣⁢So b holds the value of a and if we change the value of a, b will not be affected⁡
// console.log(a);



// String 

//⁡⁢⁢⁢ Their are 3 ways to make a string⁡

// '' --> Single quote 
// "" --> Double quote
// `` --> Backticks


// ⁡⁢⁢⁢Null means the value is not assigned on purpose⁡

// let number = null

// Undefined 

// ⁡⁢⁢⁢undefined means if a user enters a value. it can be of anytype⁡ 

// let a;

// ⁡⁢⁢⁢Symbols⁡
// Symbols means unique and immutable value

// let u1=Symbol("uid")
// let u2=Symbol("uid")

// console.log(u1===u2); // False those both have same value but they are diffrent 

// ⁡⁢⁢⁢We can create a unique value and can keep it and it will don't overwrite the original value⁡


// ⁡⁢⁢⁢bigint⁡
// ⁡⁢⁢⁢bigint is a interger value which is very large⁡

// let a=Number.MAX_SAFE_INTEGER
// console.log(a);

// This is maximum safes value after that their will be errors and 
// the calculations will not be performed correctly

// And what if we want to calculate more than this big Number

// Then this is the Syntax

// let num=9007199254740991n
// console.log(num+10);

// This is how we can calculate bigint number and don't get calculations error


// ⁡⁢⁢⁡⁢⁢⁢Reference Types (Array[], Object{}, Function() )⁡

// In refrence type

// let a = [1,2,3];
// let b=a; // In refrence value if we change the value of a the value of will also change

// console.log(b);

// ⁡⁢⁣⁢and if we change the value of b the value of a will also change⁡ 

// b.pop()
// console.log(b);
// console.log(a);

// let a=[1,2,3]
// let b=a;
// b.pop()

// ⁡⁢⁢⁢In this case the we changed the value of b but a value also got changed⁡

// In objects

// let a = {
//    name:"Ayush"
//} 
// let b=a;
// b.name="Ayushi"

// console.log(a);

// In Objects if we change the value of copy object it will also Reflect at original object

// Dynamic Typing: Dynamic data typing is the process of not declaring 
// the data type before intitalizing because javascript figure it out on it's own

// a="Ayush"
// a=12
// a=true
// a=null
// a=undefined 

// In this sitution "a" is defended again and again 

// ⁡⁢⁢⁢Types of quirks⁡

// if we add []+[] output will be ''
// typeof of NaN is Number 



// type convertions

// ⁡⁢⁢⁢Type Converstion is the process in which a number datatype can be changed and a string datatype can⁡
// ⁡⁢⁢⁢be also changed and converted to number⁡

// "5"+1
// this process will give me '51'

// and if i will substract

// "5"-1

// it will give me 4

// ⁡⁢⁢⁢Why like this? Because + operater have two work 1 is concatition and to add two number⁡
// ⁡⁢⁢⁢and in substraction their is only one action of minius so the string get converted to number⁡

// ⁡⁢⁢⁢Truthy and falsy⁡

// 0 false "" null undefined NaN document.all --> false
// remainding all will converted --> true
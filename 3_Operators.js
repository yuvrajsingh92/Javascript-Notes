// ⁡⁢⁢⁢Arithmetic, Camparison, Logical, assignment, Unary, Ternary⁡

// "+" "-" "*" "/" "%" "**" : This all are called ⁡⁢⁣⁢Arithmetic Operators⁡
// ⁡⁢⁣⁢Added Operator⁡
// let a = 3+2
// console.log(a);

// let b = "Ayu" + "sh"
// console.log(b);

// ⁡⁢⁣⁢Substractions⁡
// let a = 5-2 
// console.log(a);

// ⁡⁢⁣⁢Multiplication⁡

// let a = b*c 
// console.log(a);

// ⁡⁢⁣⁢Divide⁡
// let a = 12/2
// console.log(a);

// ⁡⁢⁣⁢Remainder⁡
// let a = 12%5
// console.log(a);

// ⁡⁢⁣⁢Exponential⁡
// let a = 2**3
// console.log(a);

// =,==,=== : This is called ⁡⁢⁣⁢Camparison operators⁡

// This Operator is used for assign the value to variable
// let a = 2+2

// "==" ⁡⁢⁣⁢This operator is used for comparison⁡ 

// 12=="12" // True 

// "===" ⁡⁢⁣⁢This Operator is used for comparing the type of variable⁡

// 12==="12" // False

// < >, <=, >=, !, !=,!==, !!

// 12 < 10 // false

// 12 > 10 // true

// 12 <=12 // true 

// 12 >= 11 // true

// " != "

// 12 != 14 // True

// 12 != 12 // False

// "!=="

// 12 !==12 // true

// 12 !== "12" // true


// && || : ⁡⁢⁢⁢Logical Operators⁡

// 12>=12 && 12 >10 // true 
// 12 > 13 && 13 > 12 // flase
// true && true // True
// True && false // False

// 12>20 || 10 <12 // true 
// true || false // True 
// true || true // true

// +,-,!,typeOf,++,-- ⁡⁢⁢⁢Unary operators⁡
// ⁡⁢⁢⁢if we want to convert "12" into number we just have to "+" sing before⁡

// let a = "12"
// console.log(+"12"); // +12

// ⁡⁢⁢⁢if we want to convert "12" into "-12" we just have to put "-" before⁡

// let a = "12"
// console.log(-"12"); // -12

// ⁡⁢⁢⁢Typeof is used to check the type of variable⁡

// ⁡⁢⁢⁢++ is used to pre-increment the value⁡

// let a =12;
// console.log(++a); // 13

// ⁡⁢⁢⁢Post increment is used for increnmenting value after⁡

// let a = 2
// console.log(a++ + a); // 5 

// ⁡⁢⁢⁢"--" is used to pre-decrement the value⁡

// let a =12;
// console.log(--a); // 11

// ⁡⁢⁢⁢post-decrement⁡
// let a =2;
// console.log(a-- + a ); // 3

// ?:, : Ternary Operators 

// ⁡⁢⁢⁢Ternary operator is used to give condition⁡
// ⁡⁢⁢⁢This type of question is very helpfull for small condition checks⁡

// let Ternary= 12>13 ? console.log(true) : console.log(false); // False 


// ⁡⁢⁣⁢Practices Question⁡

// let x=10;
// let y=20;

// if (x>5 && y <25){
//     console.log("True");
// }
// else{
//     console.log("False");
// }  // True


// let isAdmIn=true;
// let isloggedIn=false;

// if (isAdmIn || isloggedIn){
//     console.log("Access Granted");
// }else{
//     console.log("Access denied");
// } // Access Granted


// let temp=35;

// if (!(temp<30)){
//     console.log("Hot");
// }else{
//     console.log("Pleasant");
// } // Hot 


// let a=0;

// if (a){
//     console.log("Truthy");
// }else{
//     console.log("Falsy");
// } //Falsy

// let score =78;

// let grade = score>=90 ? "A" : score >=75 ? "B" : score >=60? "C" :"Fail" 
// console.log(grade); // B

// let point =20;
// let status = point >100 ? "Gold" : point > 50 ? "Silver" : "Bronze"; 
// console.log(status);  // bronze

// let LoggedIn= true;
// let hastoken= false;

// let access = LoggedIn && hastoken ? "Allow": "Deny";
// console.log(access); // Deny
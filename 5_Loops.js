// What is loops :- loops are Repative work which we have to do again again is called loop

// Their are three types of loops 
// for loop : Used for continous itration, when we know from where we have to start and 
// from where we have to go and who we have to go. we use in this case for loop

// for(i=1;i<=10;i++){
//     console.log("Ayush");
// }

// while loops : when we don't know when we have to stop we use while loop

// i=0
// while(i<11){
//     console.log("Ayush");
//     i++
// }

// do while loop : In do while loop,the loop runs atlist one time even if it's don't full-fill 
// the condition

// i=12
// do{
//    console.log(i);
//    i++
// }
// while(i<2){

// }

// In this case while's condition is not satisfied even though 12 get printed

// Break and continue

// break is use to stop the work at the certain condition

// for(i=1;i<50;i++){
//     console.log(i);
//     if (i===25){
//         break;
//     }
// }

// same example with while loop
// i=1
// while (i<50){
//     console.log(i);
//     i++
//     if (i===32){
//         break;
//     }
// }

// Continue: Continue is used for skipping the condition and printing the next value

// for (i=0;i<=50;i++){
//     if (i===32){
//         continue
//     }
//     console.log(i);
// }

// i=0
// while (i<=50){ 
//     i++
//     if (i===32){
//         continue
//     }
//     console.log(i);
// }

// Practices Programs

// Print 1 to 10 using for loop

// for (i=1;i<=10;i++){
//     console.log(i);
// }

// Using while loop

// i=1
// while(i<=10){
//     console.log(i);
//     i++
// }

// Write a program to print even number

// for (i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }

// }

// Odd number form 1 to 15

// i=1

// while (i<=15){
//     if (i%2!=0){
//         console.log(i);
//     }
//     i++
// }

// Write a program to print table of 5


// const num=prompt("Enter a number :")
// for (i=1;i<=10;i++){
//     console.log(`${num} * i = ${num*i}`);
// }

// Sum form 1 to 100


// let sum = 0
// for (i=1;i<=100;i++){
//     sum=sum+i
// }
// console.log(sum);

// 1 to 50 that are divisble by 3

// for(i=1;i<=50;i++){
//     if (i%3==0){
//         console.log(i);
//     }
// }

// Ask the user a number and check each number from that number is even or odd

// let num=prompt("Enter a number :")

// for (i=1; i<=num;i++){
//     if (i%2==0){
//         console.log(`${i} is Even`);
//     }
//     else if (i%2!=0){
//         console.log(`${i} is Odd`);
//     }
// }

// Count how many number are divisible by both 3 and 5 from 1 to 100

// for (i=1;i<=100;i++){
//     if (i%3===0 && i%5===0){
//         console.log(`${i} is divisible both 3 and 5`);
//     }
// }

// Stop at multiple of first 7, run the loop for 1 to 100 

// for(i=1; i<=100;i++){
//     if (i%7===0){
//         break;
//     }
//     console.log(i);
// }

// Skip multiple of 3

// for (i=0;i<=20;i++){

//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }

// Print 5 odd numbers only

// let count=0
// for (i=1;i<=100;i++){
//     if (i%2!==0){
//         console.log(i);
//         count++
//         if (count===5){
//             break;
//         }
//     }
// }
// console.log(count);

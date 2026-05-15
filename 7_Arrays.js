// Arrays

// How to create an Array: we can create a array by using this "[]" brackets and 
// putting value array. In js are dyanmic type, means we can but any values in the array  

// Let arr = [1,2,3,4,5] this is example of an array 

// How to access an array 

// arr[1] // By giving the index value we can access any index array

// How to modify an array

// arr[2] = 12; // By providing index value of the element of an array and giving the value 

// Array methods (Push,Pop,Shift,unshift,splice,slice,revserse,sort)

// let arr=[1,2,3,4,5]
// arr.push(7000) // Push method will add 7000 at the end of an array 

// let arr=[1,2,3,4,5]
// arr.pop() // Pop method will remove the last element of the array 

// let arr=[1,2,3,4,5]
// arr.shift() // Shift method is used for removing a element from the start of array 

// let arr=[1,2,3,4,5]
// arr.unshift(0)// Unshift method will add a element at the end of an array we just have to put the value in the argument part

// let arr=[1,2,3,4,5]
// arr.splice(2,1) // Splice method is use for removing a part of array by providing the index value and 
// how many numbers you want to remove from the index value which you have given

// let arr=[1,2,3,4,5] // Slice method is use for removing the part of array, by giving the starting value and ending value 
// let newarr=arr.slice(0,3) // Outpur : [1,2,3] 

// let arr=[1,2,3,4,5] // reverse method is use for revering the array
// arr.reverse() // Output [5,4,3,2,1]

// let arr=[5,4,3,2,1] // Sort methods is use to sort an array in assending order 
// arr.sort() // Output : 1,2,3,4,5

// For each loop : foreach loop is used for array

// let arr=[5,10,15,20]

// arr.forEach(val => {
//     console.log(val+5)
// });

// Map Function: 

// let arr=[1,2,3,4,5]

// let newarr=arr.map(function(val){
//     return 12; // This will create a new array with 5 12;
// })

// let arr=[10,20,30,40,50]
// arr.map(function(value){
//     if (value > 10) return value
// }) // What this is doning is creating an array in which the value is greater than 10 
// is getting add in the new array


// Filter : filter is used for filtering from the array and we have to return true or false

// let arr=[1,2,3,4,5]

// let newfilter=arr.filter(function(val){
//     if (val > 4) return true;
//}) This will take true or false value and return on the given condition

// Reduce function: reduce function is used to reduce an array into a single number by adding up the hole array

// let arr=[1,2,3,4,5,6]
// let newarr=arr.reduce(function(a,b){
//     return a+b
// },0); // In this method we have to give 2 value and the a value is define at the end of the function 
// and it's added by b

// Find function : find function is used to find a element in an array 

// let arr = [5, 12, 8, 130, 44];

// let found = arr.find(element => element > 10);

// console.log(found); // 12, FInd method give the first element satishfy the condition

// Some method : Some method is used to find the if element exist and returns true or false 

// let arr=[10,30,32,90]
// let newarr=arr.some(function(val){
//     return val > 85
// })

// console.log(newarr) // true

// Every method is used to check every element in the arr should satisfy the condition

// let arr=[10,30,32,90]
// let newarr=arr.every(function(val){
//     return val > 10
// })
// console.log(newarr) // false 

//  Destructuring and spread operators 

// This is called Destructuring 

// let arr = [1,2,3,4,5]
// let [a,b]=arr // a=1,b=2

// let arr =[1,2,3,4,5]
// let [a,b,,d]=arr // a=1,b=2,d=4

// Spread : spread method is used for copy the arr value without refrencing of arr1 in arr2 

// let arr1=[1,2,3,4,5,6,7,8,9]
// let arr2=arr1;
// console.log(arr2) // This is refrence of arr1 in arr2. if we change arr2 
// the changes will be refelected into arr 2 also. To avoid this we use spread 

// let arr1=[1,2,3,4,5,6,7,8,9]
// let arr2=[...arr1];
// console.log(arr2)

// This will create the copy of arr1 in arr2 and if we make changes the changes will not refelect at arr1

// Practices Question

// Write a program to create a array with 3 fruits name and print the second fruit

// let fruits = ["Banana","Grapes","Apple"]
// console.log(fruits[1])

// Add "Mango" at the end and "Pineapple" at the begginnig of an array 

// fruits.unshift("Pineapple")
// fruits.push("Mango")
// console.log(fruits)

// Replace "Banana" With "Kiwi"

// fruits.shift();
// fruits.unshift("Kiwi")
// fruits.push("Kiwi")
// console.log(fruits)

// What is diffrent's between push and unshift
// Ans: Push is used to add at the end of the array and unshift is used to add at the start of an array 

// Remove the last item of an array using method
// let number=[1,2,3,4]
// console.log(number.pop())

// Insert "Red" and "Blue" at index 1 in the array
// let color=["Green","Yellow"]
// color.splice(1,0,"Red","Blue")

// Extract the middle 3 element from the array

// let items = [1,2,3,4,5,6]
// let newarr=items.slice(2,5)

// Sort the array in alphabetical order

// let names=["Zara","Arjun","Mira","Bhavya"]
// names.sort()

// let names=["Zara","Arjun","Mira","Bhavya"]
// names.sort().reverse()

// Use .map to square each number

// let arr = [1,2,3,4]
// let squareArr=arr.map(function(val){
//     return val * 2
// })
// console.log(squareArr)

// Use filter to filter out on given conditions

// let arr = [5 ,12, 8, 20, 3]
// newarr=arr.filter(function(val){
//     return val > 10
// })
// console.log(newarr)

// Use .reduce to calculate sum of an array

// let arr = [10,20,30]
// let sum = arr.reduce((a,b)=>{
//     return a + b
// })
// console.log(sum)

// Use .find to get first number less then 10

// let arr =[12,15,3,8,20]
// let newarr=arr.find((n)=>{
//     return n > 10;
// })
// console.log(newarr) // 12 

// Use .some to check if any student have scored below 35;

// let arr = [45,60,28,90]
// let newarr = arr.some((val)=>{
//     return val <= 35 
// })
// console.log(newarr)

// Use .every() to check if all numbers  are even

// let arr = [2,4,6,8,10]
// let newarr=arr.every((val)=>{
//     return val % 2 ===0 
// })
// console.log(newarr)

// Desturcture a array and remove the first name and last name

// let name =["Ayush","Singh"]
// let [a,b]=name 

// Merge two arrays using spread operator

// let arr1 = [1,2]
// let arr2 = [3,4]
// let c =[...arr1,...arr2]
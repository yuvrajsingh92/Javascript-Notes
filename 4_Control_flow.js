// Write a function to calculate the score

// Problem Statements

// function getGrade(score){
//     if (score >=90 && score <=100){
//         return "A+"
//     }else if (score >=80 && score<=89){
//         return "A"
//     }
//     else if (score >= 70 && score <=79){
//          return "B"
//     }
//     else if (score >=60 && score <=69){
//         return "C"
//     }else if (score >=33 && score <=59){
//         return "D"
//     }
//     else if (score >=0 && score <=32){
//         return "Fail"
//     }
//     else{
//         console.log("Invalid Input");
        
//     }
// }
// console.log(getGrade(98));

// We can write this same above code in early return state, 
// we just have to remove me else part and it will work normally like this 

// function getGrade(score){
//     if (score >=90 && score <=100) return "A+"
//     if (score >=80 && score<=89) return "A"
//     if (score >= 70 && score <=79) return "B"
//     if (score >=60 && score <=69) return "C"
//     if (score >=33 && score <=59) return "D"
//     if (score >=0 && score <=32) return "Fail"
//     return console.log("Invalid Input");
// }
// console.log(getGrade(78));

// In this Case the code work perfectly and without error 
// and the code is much more smaller and simple. And this is called as early return statement

// function RPS(user,computer){
//    if (User == "Paper" && computer == "Rock") return "User is Winner"
//    if (User == "Scissor" && computer == "paper") return "User is Winner"
//    if (User == "Rock" && computer == "Scissor") return "User is Winner"
//
//  return "Computer"
//
//   if (user === computer) return "Draw"
// }

// console.log(RPS("Scissor","Rock"));
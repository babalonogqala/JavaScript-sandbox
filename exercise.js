// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
// let CourseName = "Web development the complete guide";

//    - A variable that stores the price of that course
// let coursePrice = 300;

//    - A variable that stores the three main goals that you have, when taking this course
// let courseGoals = ["get a job", " fullstack dev", " web development"];

// 2) Output ("alert") the three variable values
// alert(CourseName);
// alert(coursePrice);
// alert(courseGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
// let myGoals = {
//     name: CourseName, 
//     price: coursePrice,
//     goals: courseGoals,
// };

// 4) Also output the second element in your "main goals" variable
// alert(myGoals.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

// function getListItem(array, arrayIndex){
//     let arrayElement = array[arrayIndex];
//     return arrayElement;
// };

// let firstGoal = getListItem(myGoals.goals, [0]);
// alert(firstGoal);

let multiple = [2, 4, 6, 8, 10];
let odd = 3;

function calculateNumber(num1, num2){
    let arrayDisplay = num1[num2] + odd;
    return arrayDisplay;
};

let display = calculateNumber(multiple, [1]);
alert(display);
// // this is a variable for string and integer
// let myName = "Babalo";
// let age = 20;
// // and how they are run/display
// alert(age);
// alert(myName);

// // array
// let games = ["naruto"," call of duty", " hangman"];
// // display
// alert(games); //to display all the array for games at once.
// alert(games[2]); //this is use to display one thing from the array, and this will display "call of duty".

// // objects
// let ID ={
//    name: "Babalo Nogqala",
//    number: 30044234324,
//    nationality: "South Africa",
// };

// display objects
// alert(ID.name);

// forming operations

// age = 100;
// let years = age + 18;
// alert("my age plus 18 = " + years);

// let player1 = "xhanti";
// // functions
// function calculateAdultYears(userAge){
   
//    return  userAge - 18;
//    // return player1; //return the variable name 
// }

// calling a function
// player1 = calculateAdultYears(age);
//  alert(player1);


//  let person = {
//    name: "Babalo", //property
//    greet(){ //method
//       console.log("hello");
//    }
//  };

// person.greet();
// console.log("Hello World");

let myName = "babalo";
let age = 20;
let course = ["web development", " android development", " react developer"];

console.log(myName);
console.log(age);
console.log(course[0]);

let person = {
  name: myName,
  courses: course,
  Number: 12132243234,
  salary: 200,
  greet(){
    let myAge = age - 10 ;
    return myAge;
  },
};

;
console.log(person.greet());

function displayCourse(array, arrayCourse){
  let myCourse = array[arrayCourse];
  return myCourse;
};

let display = displayCourse(person.courses, [1]);
console.log(display);



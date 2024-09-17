// console.log("Helllo");
// console.log("I like pizza");

// window.alert("This is an alert");

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza!";

//Declaration of variable 'x'
// let x;

// // Assignment of x
// x = 100;
// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// console.log(gpa);
// console.log("Hello there");

// Insert variables as placeholders with backtick (template literal)
// console.log(`You are ${age} years old`);

// let online = true
// console.log(`James is online: ${online}`)

// let forSale = false;
// console.log(`Is this car for sale: ${forSale}`)

// let fullName = "James Twin";
// let age = 21;
// let isStudent = true

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;





// How to accept user input
//1. EASY WAY = window prompt
//.2 PROFFESIONAL WAY = HTML textbox


// 1.
// let username;
// username = window.prompt("What is your username?");
// console.log(username);

// 2.
// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }



// type conversion = chnage the datatype of a value to another 
//                  (strings, numbers, booleans)



// const = a variable that can't be changed

// const pi = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);
// circumference = 2 * pi * radius;
// console.log(circumference);

// const pi = 3.14159;
// let radius;
// let circumference = 2 * pi * radius;

// document.getElementById('mySubmit').onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     let circumference = 2 * pi * radius;
//     document.getElementById("myH3").textContent = `Circumference for a circle with a radius of ${radius}cm is ${circumference} cm`;
// }




// let age = 25;

// if(age >= 18) {
//     console.log("You are old enough to enter this site");
// }
// else {
//     console.log("You are not old enough")
// }


// let age = 25;
// let hasLicense = true;

// if(age >= 16) {
//     console.log("You are old enough to drive");
//     if(hasLicense) {
//         console.log("You have your lisence")
//     }
//     else {
//         console.log("You do not have your lisence yet!")
//     }
// }
// else {
//     console.log("You must be 16+ to have a lisence")
// }


// let age = -1

// if(age >= 18) {
//     console.log("You are old enough to enter this site")
// }
// else if(age  < 0) {
//     console.log("Your age can't be less below zero")
// }
// else {
//     console.log("You must be 18+ to enter this site")
// }


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);
    if (isNaN(age)) {
        result.textContent = "This is not a valid number"
    }
    else if(age > 100) {
        result.textContent = "You are TOO OLD to enter this website"
    }
    else if(age >= 18) {
        result.textContent = "You are old enough to enter this website"
    }
    else if(age == 0) {
        result.textContent = "You were just born"
    }
    else {
        result.textContent = "You must be 18+ to enter this website"
    }
}
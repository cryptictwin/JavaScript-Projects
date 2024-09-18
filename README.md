# JavaScript-Projects

variable = A container that stores a value.
            Behaves as if it were the value it contains.

1. declaration      let x;
2. assignment       x = 100;



Arithmetic operators = operands (values, variables, etc)
                       operators (+ - * /) 

Augmented assignment operators: (students = students + 1)
                                = (students += 1)

To increase a variable by only 1: (student++)
            or subtract by only 1: (student--)


IF STATEMENTS = if a condition is true, execute some code
                if not, do something else







.checked = property that determines the checked state of an
           HTML checkbox or radio button element







 ternary operator = a shortcut to if{} and else{} statements
                    helps to assign a variable based on a condition
                    condtion ? codeIfTrue : codeIfFalse
let age = 21;
let message = age >= 18 ? "You're and adult" : "You're a minor";

Boolean example
let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";







SWITCH = can be an efficient replacement to many 'else if' statements
let day = 1

switch(day) {
    case 1
        code
        break:
    case 2
        code
        break:
    ...
}
have break: statements after each case so once a case is true, it breaks out of the switch, rather than executing every line of code the comes after








string methods = allow you to manipulate and work with text (strings)

e.g let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.replaceAll("-", "") - Replaces the dashes with nothing
phone Number = phoneNumber.padStart(15, "0") - pads the string with 0's until 15 characters long







string slicing = creating a substring from a portion of another string
                
                string.slice(start, end)

e.g 
const email = "jamestwin793@gmail.com";

let username = email.slice(0, email.indexOf("@"));  -  slice starts at 0 index of string (j), and ends at the index of the character @ in the email.

console.log(username);  -  Results in "jamestwin793"







//method chaining = Calling one method after another in one continuous line of code

//e.g.

let username = window.prompt("Enter your username");  -  jAmestWin

// ----- NO METHOD CHAINING -----
username = username.trim();            - removes all leading and trailing whitespaces
let letter = username.charAt(0);       - sets letter variable to the character at the 0 index
letter = letter.toUpperCase();         - changes letter to uppercase 

let extraChars = username.slice(1);         - variable is equal to string of characters after 1 index of username
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

// ----- METHOD CHAINING -----
username = username.trim().charAt(0).toUpperCase + username.trim().slice(1).toLowerCase;
console.log(username) --- Jamestwin

// Both pieces of code above produce the exact same result.







// logical operators = used to combine or manipulate boolean values (true or false)

                    AND = &&
                    OR = ||
                    NOT = !





// operators    = assignment operator (used to assign a value to a variable)
                == comparision operator (compare if values are equal)
                === strict equality operator (compare if values & datatype are equal)
                != inequality operator (returns true if two values are not equal)
                !== strict inequality operator (returns true if two values and datatypes are not equal)






// while loop = repeat some code WHILE some consition is true


// for loop = repeat some code a LIMITED amount of times

e.g 
for(let i = 1; i <= 20; i++) {        ---- i is a common naming convention for a counter within a for loop, i meaning index
    if(i == 13){
        continue;                   ---- continue will skip this iteration of the loop
    }
    else if(i == 17) {
        break;                      ---- if the condition is true, exits out of the for loop entirely
    }
    else {
        console.log(i);
    }
}







// function = A section of reusable code.
              Declare code once, use it whenever you want.
              Call the function to execute that code.

// If you want to send you function some data, you'll need a matching set of parameters and arguments

e.g function add(x, y) {
    return x + y;              ---- Returns the value of x + y
}
let answer = add(40, 60);      ---- Invoking the add function and giving two arguments, pairing with the paremeters set by the function
console.log(answer);           ---- = 100 








// ---- variable scope = where a variable is recognized and accessible (local vs global)

let x = 1   ---- These variables are declared outside of a function so are global. 
let x = 2   ---- x cannot be reused in this scope so this is illegal


function function1() {
    let x = 1;
    console.log(x);
}
                                ---- Here we have two variables with the same name (x). This is allowed as they have different scopes.
function function2() {          ---- variables inside a function cannot see other variables inside other functions.
    let x = 2;                  ---- Any variable declared inside of a function (or a set of {}) has a local scope
    console.log(x);
}







// ---- array a variable like structure that can hold more than 1 value








// ---- spread operator = ... allows and iterable such as an array 
                          or string to be expanded into seperate elements
                          (unpacks the elements)








/// ---- rest parameters = (...rest) allow a function to work with a variable
                           number of arguments by bundling them into an array
    (very similiar to
    spread operators)      spread = expands an array into seperate elements
                           rest = bundles seperate elements into an array 

e.g.

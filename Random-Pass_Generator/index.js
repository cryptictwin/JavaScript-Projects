function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {  // Parameters of function
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()-+=";

    let allowedChars = "";
    let password = "";

    // ternary operator, if the includeLowercase variable is true, the lowercase variable is added to the allowedChars variable
    // the succeeding lines of code work the same way with their respected variables.
    allowedChars += includeLowercase ? lowercase : "";
    allowedChars += includeUppercase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";


    if(length <=5) {
        return "Password must be 6 charcaters or more long";   // Return statement stops the execution of a function and 
    }                                                          // returns a value

    if(allowedChars.length === 0) {
        return "You must select atleast 1 set of characters "; // This returns when no sets of characters have been selected
    }

    for(i = 0; i < length; i++) {
        const indexOfChar = Math.floor(Math.random() * allowedChars.length);  // Generates a random number from a range 
        password += allowedChars[indexOfChar];                                // determined by the length of the allowedChars 
    }                                                                         // string length
    return password; // Returns the value of password after the function has been executed
}

function applyChangesAndGeneratePassword() {

    // .checked property sets the const to true or false, depending on whether the checkbox has been selected
    const passwordLength = Number(document.getElementById("textLength").value);
    const includeLowercase = document.getElementById("lowercaseChar").checked;
    const includeUppercase = document.getElementById("uppercaseChar").checked;
    const includeNumbers = document.getElementById("numberChar").checked;
    const includeSymbols = document.getElementById("symbolChar").checked;

    const password = generatePassword(passwordLength,       // Gives a variable the value of the generatePassword function
                                        includeLowercase,
                                        includeUppercase,
                                        includeNumbers,
                                        includeSymbols,);
    
        // finds the HTML element with ID "result" and changes the content to the succeeding string
    document.getElementById("result").textContent = `Password: ${password}`;                                    
}

// Applies an event listener to the HTML element with the ID "generateButton".
// The first parameter is the type of event, in this case when the user clicks the element
// The second parameter is the function that is called when the event occurs.
document.getElementById("generateButton").addEventListener("click", applyChangesAndGeneratePassword);






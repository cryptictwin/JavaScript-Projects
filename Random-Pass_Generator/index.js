function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {  // Parameters of function
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()-+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercase : "";
    allowedChars += includeUppercase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";


    if(length <=5) {
        return "Password must be 6 charcaters or more long";   // Return statement stops the execution of a function and 
    }                                                          // returns a value

    if(allowedChars.length === 0) {
        return "You must select atleast 1 set of characters ";
    }

    for(i = 0; i < length; i++) {
        const indexOfChar = Math.floor(Math.random() * allowedChars.length);  // Generates a random number from a range 
        password += allowedChars[indexOfChar];                                // determined by the length of the allowedChars 
    }                                                                         // string length
    return password;
}

function applyChangesAndGeneratePassword() {
    const passwordLength = Number(document.getElementById("textLength").value);
    const includeLowercase = document.getElementById("lowercaseChar").checked;
    const includeUppercase = document.getElementById("uppercaseChar").checked;
    const includeNumbers = document.getElementById("numberChar").checked;
    const includeSymbols = document.getElementById("symbolChar").checked;

    const password = generatePassword(passwordLength,       // Gives a variable the value of password from the function
                                        includeLowercase,
                                        includeUppercase,
                                        includeNumbers,
                                        includeSymbols,);
    
    document.getElementById("result").textContent = `Password: ${password}`;                                    
}

document.getElementById("generateButton").addEventListener("click", applyChangesAndGeneratePassword);








const password = generatePassword(passwordLength,       // Gives a variable the value of password from the function
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols,);



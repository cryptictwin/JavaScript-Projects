





















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
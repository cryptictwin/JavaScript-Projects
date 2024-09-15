const decreaseCounter = document.getElementById("decreaseCounter");
const resetCounter = document.getElementById("resetCounter");
const increaseCounter = document.getElementById("increaseCounter");
const counter = document.getElementById("counter");

let count = 0;

increaseCounter.onclick = function(){
    count++;
    counter.textContent = count;
}

resetCounter.onclick = function(){
    count = 0;
    counter.textContent = count;
}

decreaseCounter.onclick = function() {
    count--;
    counter.textContent = count;
}

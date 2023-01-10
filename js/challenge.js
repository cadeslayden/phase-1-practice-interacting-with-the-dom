document.addEventListener("DOMcontentLoaded", (event)=>{
    intervalID = setInterval(startCount, 1000)
})
let pause = document.getElementById("pause")
let count = 0
let intervalID

function timerText() {
    count += 1;
    timerText.textContent = count;
    console.log("hello")
}

timerText()
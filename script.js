setInterval(setClock, 1000) //calls a function setClock every second


const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// Rotate each number about by 30 deg
let allNum = document.querySelectorAll('.number');
for (num of allNum) {
    num.style.transform = `rotate(${30*num.innerText}deg)`;
}
//Function to set the clock hands
function setClock() {
    const currentDate = new Date() //gets current date
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(hourHand, hourRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(secondHand, secondsRatio);

}

//function to set the rotation of each element wrt degrees
function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);


}
//set clock upon windows page load
window.onload = setClock();
// setClock();
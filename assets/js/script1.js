// changing color of icon in nav bar on hover.
let a = document.getElementsByClassName('home');
Array.from(a).forEach(function (element, index) {
    let c = element.className.split(' ');
    let curr = `something`;
    element.addEventListener('mouseenter', () => {
        curr = element.getAttribute('src');
        element.setAttribute('src', `./assets/images/${c[1]}-3.png`);
    });
    element.addEventListener('click', function () {
        let d = document.getElementsByClassName('activePageElement');
        if (d[0].innerHTML != `<img src="../assets/images/${c[1]}-2.png">`) {
            d[0].classList.add('animation');
            setTimeout(function () {
                d[0].innerHTML = `<img src="../assets/images/${c[1]}-2.png">`;
                d[0].classList.remove('animation');
            }, 300);
        }


    })
    element.addEventListener('mouseleave', () => {
        element.setAttribute('src', `${curr}`)
    });

});

// to implement the countdown 
// code inspired from : https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

// The data/time we want to countdown to
var countDownDate = new Date("Mar 5, 2022 9:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours 
document.getElementById("minutes").innerHTML = minutes
document.getElementById("seconds").innerHTML = seconds 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);


// clock hand variables 

let clockhand = document.getElementById('hourhand');
let clockminhand = document.getElementById('minhand');
let clocksechand = document.getElementById('sechand');

// loop
setInterval(() => {
    // time variables

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    //  rotation math 
    let hr = hour*30 + min/2;
    let mn = min*6;
    let sc = sec*6;

    // Dom manipualtion or access 
    //   hand rotation 
    clockhand.style.transform = `rotate(${hr}deg)`;
    clockminhand.style.transform = `rotate(${mn}deg)`;
    clocksechand.style.transform = `rotate(${sc}deg)`
}, 1000);
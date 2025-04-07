window.addEventListener('keydown', function(event) {   
    if (event.code === 'Space') {
        event.preventDefault();
    }
});
//Just A Switch Bro
let switchState = 0;

const theSwitch = document.getElementById('theSwitch');

theSwitch.addEventListener('change', function() {
    if (theSwitch.checked) {
      switchState = 1; //on
    } else {
      switchState = 0; //off
    }
    console.log("dev", switchState);
  });
//Just A Switch Bro

document.addEventListener('keydown', function(event) {
    if ((event.key === " " || event.keyCode === 32) && !spacebarPressed) {
        spacebarPressed = true;
        spaceClick();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === " " || event.keyCode === 32) {
        spacebarPressed = false;
    }
});

function itClick() {
    if (switchState === 0) {
    increment()
}
}

  // Function called when the switch is ON
  function spaceClick() {
    if (switchState === 1) {
    increment()
}
}

var initialClicks = 0;
var initialMulti = 1;
var initialRebirths = 0;
var initialInfo = 1000;
var initialC = "???";
var initialF = "???";

var clicks = 0;
var multi = initialMulti;
var rebirths = initialRebirths;
var info = initialInfo;

var C1 = initialC, C2 = initialC, C3 = initialC, C4 = initialC, C5 = initialC;
var C6 = initialC, C7 = initialC, C8 = initialC, C9 = initialC, C10 = initialC;
var F = initialF;

function saveGame() {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('multi', multi);
    localStorage.setItem('rebirths', rebirths);
    localStorage.setItem('info', info);
    localStorage.setItem('C1', C1); localStorage.setItem('C2', C2);
    localStorage.setItem('C3', C3); localStorage.setItem('C4', C4);
    localStorage.setItem('C5', C5); localStorage.setItem('C6', C6);
    localStorage.setItem('C7', C7); localStorage.setItem('C8', C8);
    localStorage.setItem('C9', C9); localStorage.setItem('C10', C10);
    localStorage.setItem('F', F);
}

function loadGame() {
    clicks = parseInt(localStorage.getItem('clicks')) || initialClicks;
    multi = parseInt(localStorage.getItem('multi')) || initialMulti;
    rebirths = parseInt(localStorage.getItem('rebirths')) || initialRebirths;
    info = parseInt(localStorage.getItem('info')) || initialInfo;

    C1 = localStorage.getItem('C1') || initialC;
    C2 = localStorage.getItem('C2') || initialC;
    C3 = localStorage.getItem('C3') || initialC;
    C4 = localStorage.getItem('C4') || initialC;
    C5 = localStorage.getItem('C5') || initialC;
    C6 = localStorage.getItem('C6') || initialC;
    C7 = localStorage.getItem('C7') || initialC;
    C8 = localStorage.getItem('C8') || initialC;
    C9 = localStorage.getItem('C9') || initialC;
    C10 = localStorage.getItem('C10') || initialC;
    F = localStorage.getItem('F') || initialF;

    updateUI();
}

function updateUI() {
    Counter.innerHTML = clicks;
    Multiplier.innerHTML = multi;
    rCounter.innerHTML = rebirths;
    rebirthInfo.innerHTML = info;

    rebirth1.innerHTML = C1; rebirth2.innerHTML = C2;
    rebirth3.innerHTML = C3; rebirth4.innerHTML = C4;
    rebirth5.innerHTML = C5; rebirth6.innerHTML = C6;
    rebirth7.innerHTML = C7; rebirth8.innerHTML = C8;
    rebirth9.innerHTML = C9; rebirth10.innerHTML = C10;
    FINISH.innerHTML = F;
}

function resetGame() {
    clicks = initialClicks;
    multi = initialMulti;
    rebirths = initialRebirths;
    info = initialInfo;
    C1 = C2 = C3 = C4 = C5 = C6 = C7 = C8 = C9 = C10 = initialC;
    F = initialF;
    saveGame();
    loadGame();
}

window.addEventListener('beforeunload', saveGame);
document.addEventListener('DOMContentLoaded', loadGame);

function increment() {
    clicks += multi;
    Counter.innerHTML = clicks;
    Info();
}

function Rebirth() {
    if (clicks >= info) {
        rebirths++;
        clicks = 0;
        info += 1000;
        Rebirth6();
    }
}

function Rebirth6() {
    rebirthInfo.innerHTML = info;
    Counter.innerHTML = clicks;
    rCounter.innerHTML = rebirths;
    Code1(); Code2(); Code3(); Code4(); Code5();
    Code6(); Code7(); Code8(); Code9(); Code10();
    finishCode();
}

function Info() {
    rebirthInfo.innerHTML = info;
}

// Code unlocks
function Code1() { if (rebirths >= 1) C1 = 27193; rebirth1.innerHTML = C1; }
function Code2() { if (rebirths >= 5) C2 = 85653; rebirth2.innerHTML = C2; }
function Code3() { if (rebirths >= 10) C3 = 92766; rebirth3.innerHTML = C3; }
function Code4() { if (rebirths >= 50) C4 = 39272; rebirth4.innerHTML = C4; }
function Code5() { if (rebirths >= 100) C5 = 83756; rebirth5.innerHTML = C5; }
function Code6() { if (rebirths >= 250) C6 = 78254; rebirth6.innerHTML = C6; }
function Code7() { if (rebirths >= 500) C7 = 49337; rebirth7.innerHTML = C7; }
function Code8() { if (rebirths >= 1000) C8 = 29463; rebirth8.innerHTML = C8; }
function Code9() { if (rebirths >= 2500) C9 = 73673; rebirth9.innerHTML = C9; }
function Code10() { if (rebirths >= 5000) C10 = 83646; rebirth10.innerHTML = C10; }
function finishCode() { if (rebirths >= 10000) F = 8263813936; FINISH.innerHTML = F; }

// Secret Codes
function passcheck() {
    let code = document.getElementById('SecretCodeInput').value;
    let codes = {
        "2": "images/Two.png",
        "27193": 5,
        "85653": 10,
        "92766": 20,
        "39272": 50,
        "83756": 100,
        "78254": 250,
        "49337": 500,
        "29463": 1000,
        "73673": 2500,
        "83646": 5000,
        "8263813936": Infinity,
        "NORMAL": "images/indexOnly/NORMAL.png",
        "9072041919": "images/Cheese-Yay.png",
        "7382547826": "images/Gru.png",
        "3729163482": "images/Freddy-Buy.png",
        "4057791862": "images/Normal-Toad.png",
        "8326429372": "images/Grinch.gif",
        "70": "images/Golden-Logo.png"
    };

    if (codes[code]) {
        if (typeof codes[code] === 'number') {
            multi = codes[code];
            Multiplier.innerHTML = (multi === Infinity) ? "Infinity" : multi;
            if (multi === Infinity) {
                Status.innerHTML = "Finished";
            }
        } else {
            document.getElementById('Logo').src = codes[code];
        }
    }
}

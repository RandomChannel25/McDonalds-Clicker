var initialClicks = 0;
var initialMulti = 1;
var initialRebirths = 0;
var initialInfo = 1000;
var initialC = "???";
var initialF = "???";

var C1 = initialC;
var C2 = initialC;
var C3 = initialC;
var C4 = initialC;
var C5 = initialC;
var C6 = initialC;
var C7 = initialC;
var C8 = initialC;
var C9 = initialC;
var C10 = initialC;
var F = initialF;

function saveGame() {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('multi', multi);
    localStorage.setItem('rebirths', rebirths);
    localStorage.setItem('info', info);
    localStorage.setItem('C1', C1);
    localStorage.setItem('C2', C2);
    localStorage.setItem('C3', C3);
    localStorage.setItem('C4', C4);
    localStorage.setItem('C5', C5);
    localStorage.setItem('C6', C6);
    localStorage.setItem('C7', C7);
    localStorage.setItem('C8', C8);
    localStorage.setItem('C9', C9);
    localStorage.setItem('C10', C10);
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

    Counter.innerHTML = clicks;
    Multiplier.innerHTML = multi;
    rCounter.innerHTML = rebirths;
    rebirthInfo.innerHTML = info;
    rebirth1.innerHTML = C1;
    rebirth2.innerHTML = C2;
    rebirth3.innerHTML = C3;
    rebirth4.innerHTML = C4;
    rebirth5.innerHTML = C5;
    rebirth6.innerHTML = C6;
    rebirth7.innerHTML = C7;
    rebirth8.innerHTML = C8;
    rebirth9.innerHTML = C9;
    rebirth10.innerHTML = C10;
    FINISH.innerHTML = F;
}

function resetGame() {
    clicks = initialClicks;
    multi = initialMulti;
    rebirths = initialRebirths;
    info = initialInfo;
    C1 = initialC;
    C2 = initialC;
    C3 = initialC;
    C4 = initialC;
    C5 = initialC;
    C6 = initialC;
    C7 = initialC;
    C8 = initialC;
    C9 = initialC;
    C10 = initialC;
    F = initialF;

    saveGame();
    loadGame();
}

window.addEventListener('beforeunload', function() {
    saveGame();
});

document.addEventListener("DOMContentLoaded", function(event) {
    loadGame();
});

var clicks = 0

function increment() {
    clicks = clicks += 1 * multi;
    Counter.innerHTML = clicks
    Info()
}

const SecretCodeInput = document.getElementById("SecretCodeInput");

SecretCodeInput.addEventListener("Input", () => {
    console.log(SecretCodeInput.value)
});

var rebirths = 0;
function Rebirth() {
    if (clicks >= info)
    rebirths = rebirths += 1;
rCounter.innerHTML = rebirths;
Rebirth2()
}
var info = 1000
rebirthInfo.innerHTML = info

function Rebirth2() {
    if (clicks >= info)
    rebirthInfo.innerHTML = info
Rebirth3()
}
function Rebirth3() {
    if (clicks >= info)
    clicks = clicks = -1;
    Rebirth4()
}

function Rebirth4() {
    if (clicks === -1)
    info = info += 1000
    clicks = clicks = -2;
Rebirth5()
}

function Rebirth5() {
    if (clicks === -2) {
    
    clicks = clicks = 0;
    }
Rebirth6()
}

function Rebirth6() {
    rebirthInfo.innerHTML = info
    Counter.innerHTML = clicks
    Code1()
    Code2()
    Code3()
    Code4()
    Code5()
    Code6()
    Code7()
    Code8()
    Code9()
    Code10()
}

function Info() {
    info = info += 0;
    rebirthInfo.innerHTML = info
}

var C1 = "???"
function Code1() {
    if (rebirths === 1)
    C1 = C1 = 27193;
rebirth1.innerHTML = C1
}

var C2 = "???"
function Code2() {
    if (rebirths === 5)
    C2 = C2 = 85653;
rebirth2.innerHTML = C2
}

var C3 = "???"
function Code3() {
    if (rebirths === 10)
    C3 = C3 = 92766
rebirth3.innerHTML = C3
}

var C4 = "???"
function Code4() {
    if (rebirths === 50)
    C4 = C4 = 39272
rebirth4.innerHTML = C4
}

var C5 = "???"
function Code5() {
    if (rebirths === 100)
    C5 = C5 = 83756
rebirth5.innerHTML = C5
}

var C6 = "???"
function Code6() {
    if (rebirths === 250)
    C6 = C6 = 78254
rebirth6.innerHTML = C6
}

var C7 = "???"
function Code7() {
    if (rebirths === 500)
    C7 = C7 = 49337
rebirth7.innerHTML = C7
}

var C8 = "???"
function Code8() {
    if (rebirths === 1000)
    C8 = C8 = 29463
rebirth8.innerHTML = C8
}

var C9 = "???"
function Code9() {
    if (rebirths === 2500)
    C9 = C9 = 73673
rebirth9.innerHTML = C9
}

var C10 = "???"
function Code10() {
    if (rebirths === 5000)
    C10 = C10 = 83646
rebirth10.innerHTML = C10
}

var F = "???"
function Code10() {
    if (rebirths === 10000)
    F = F = 8263813936
FINISH.innerHTML = F
}

function getValue() {
    let SecretCodeInput = document.getElementById("SecretCodeInput")
    let codeTest = SecretCodeInput.value;
}

var multi = 1
function passcheck() {
    if (document.getElementById('SecretCodeInput').value === "27193")
    multi = multi = 5;
    Multiplier.innerHTML = multi
    passcheck2()
}
function passcheck2() {
    if (document.getElementById('SecretCodeInput').value === "85653")
    multi = multi = 10;
    Multiplier.innerHTML = multi
    passcheck3()
}
function passcheck3() {
    if (document.getElementById('SecretCodeInput').value === "92766")
    multi = multi = 20;
    Multiplier.innerHTML = multi
    passcheck4()
}
function passcheck4() {
    if (document.getElementById('SecretCodeInput').value === "39272")
    multi = multi = 50;
    Multiplier.innerHTML = multi
    passcheck5()
}
function passcheck5() {
    if (document.getElementById('SecretCodeInput').value === "83756")
    multi = multi = 100;
    Multiplier.innerHTML = multi
    passcheck6()
}
function passcheck6() {
    if (document.getElementById('SecretCodeInput').value === "78254")
    multi = multi = 250;
    Multiplier.innerHTML = multi
    passcheck7()
}
function passcheck7() {
    if (document.getElementById('SecretCodeInput').value === "49337")
    multi = multi = 500;
    Multiplier.innerHTML = multi
    passcheck8()
}
function passcheck8() {
    if (document.getElementById('SecretCodeInput').value === "29463")
    multi = multi = 1000;
    Multiplier.innerHTML = multi
    passcheck9()
}
function passcheck9() {
    if (document.getElementById('SecretCodeInput').value === "73673")
    multi = multi = 2500;
    Multiplier.innerHTML = multi
    passcheck10()
}
function passcheck10() {
    if (document.getElementById('SecretCodeInput').value === "83646")
    multi = multi = 5000;
    Multiplier.innerHTML = multi
    finishcheck()
}
function finishcheck() {
    if (document.getElementById('SecretCodeInput').value === "8263813936")
    multi = multi = Infinity;
    Check()
}
function Check() {
    if (multi === Infinity)
    Status.innerHTML = "Finished"
    Check2()
}
function Check2() {
    if (multi === Infinity)
    Multiplier.innerHTML = "Infinity"
    Normal()
    buyCodeOne()
    buyCodeTwo()
    buyCodeThree()
    buyCodeFour()
    buyCodeFive()
    lastBuyCode()
}
function Normal() {
    if (document.getElementById('SecretCodeInput').value === "NORMAL") {
    let img1 = document.getElementById('Logo')
    img1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwqWhyyaWGMVuT55sV_CkZdDuLG26tFNNNg'
    }
}
function buyCodeOne() {
    if (document.getElementById('SecretCodeInput').value === "9072041919") {
    let img2 = document.getElementById('Logo')
    img2.src = 'https://i.ibb.co/7pnXQmm/Cheese-Yay.png'
    }
}
function buyCodeTwo() {
    if (document.getElementById('SecretCodeInput').value === "7382547826") {
    let img2 = document.getElementById('Logo')
    img2.src = 'https://i.ibb.co/fCVQQ7t/Gru.png'
    }
}
function buyCodeThree() {
    if (document.getElementById('SecretCodeInput').value === "3729163482") {
    let img3 = document.getElementById('Logo')
    img3.src = 'https://i.ibb.co/3N10JZz/Freddy-Buy.png'
    }
}
function buyCodeFour() {
    if (document.getElementById('SecretCodeInput').value === "4057791862") {
    let img4 = document.getElementById('Logo')
    img4.src = 'https://i.ibb.co/ws3tzJC/Normal-Toad.png'
    }
}
function buyCodeFive() {
    if (document.getElementById('SecretCodeInput').value === "8326429372") {
    let img5 = document.getElementById('Logo')
    img5.src = 'https://i.ibb.co/TtDFGfw/Twerk-with-the-Grinch.gif'
    }
}
function lastBuyCode() {
    if (document.getElementById('SecretCodeInput').value === "70") {
    let lastimg = document.getElementById('Logo')
    lastimg.src = 'https://i.ibb.co/BG4rYg4/Golden-Logo.png'
    }
}

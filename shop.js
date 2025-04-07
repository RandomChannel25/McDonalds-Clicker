function RESET() {
    // Die Save Dataa :)
    localStorage.removeItem('DaMoney');
    localStorage.removeItem('totalClicks');
    localStorage.removeItem('counted');
    localStorage.removeItem('multiplier');
    localStorage.removeItem('purchasedOne');
    localStorage.removeItem('purchasedTwo');
    localStorage.removeItem('purchasedThree');
    localStorage.removeItem('purchasedFour');
    localStorage.removeItem('purchasedFive');

    // die variables :)
    DaMoney = 0;
    totalClicks = 0;
    counted = 0;
    multiplier = 1;
    priceOne = 50;
    priceTwo = 500;
    priceThree = 1000;
    priceFour = 1500;
    priceFive = 2500;

    purchasedOne = false;
    purchasedTwo = false;
    purchasedThree = false;
    purchasedFour = false;
    purchasedFive = false;

    // make UI chang reseted
    Money.innerHTML = DaMoney;
    tClicks.innerHTML = totalClicks;
    multii.innerHTML = multiplier;

    One.innerHTML = "???";
    imgBuyOne.innerHTML = "Purchase";
    priceOne = 50;

    Two.innerHTML = "???";
    imgBuyTwo.innerHTML = "Purchase";
    priceTwo = 500;

    Three.innerHTML = "???";
    imgBuyThree.innerHTML = "Purchase";
    priceThree = 1000;

    Four.innerHTML = "???";
    imgBuyFour.innerHTML = "Purchase";
    priceFour = 1500;

    Five.innerHTML = "???";
    imgBuyFive.innerHTML = "Purchase";
    priceFive = 2500;
}








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
  //Just A Switch Bro*/

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

//Off
function itClick() {
    if (switchState === 0) {
    moneyClick()
}
}

  // On
  function spaceClick() {
    if (switchState === 1) {
    moneyClick()
}
}







// money and prices
var DaMoney = parseInt(localStorage.getItem('DaMoney')) || 0;
var totalClicks = parseInt(localStorage.getItem('totalClicks')) || 0;
var counted = parseInt(localStorage.getItem('counted')) || 0;
var multiplier = parseFloat(localStorage.getItem('multiplier')) || 1; // Make sure this is a float
var priceOne = 50;
var priceTwo = 500;
var priceThree = 1000;
var priceFour = 1500;
var priceFive = 2500;

// Load saved
var purchasedOne = localStorage.getItem('purchasedOne') === 'true';
var purchasedTwo = localStorage.getItem('purchasedTwo') === 'true';
var purchasedThree = localStorage.getItem('purchasedThree') === 'true';
var purchasedFour = localStorage.getItem('purchasedFour') === 'true';
var purchasedFive = localStorage.getItem('purchasedFive') === 'true';

// page load = money turn to saved money + clicks + multiplier 🍟
Money.innerHTML = DaMoney;
tClicks.innerHTML = totalClicks;
multii.innerHTML = multiplier;

// updates money and saves
function updateMoney() {
    Money.innerHTML = DaMoney;
    localStorage.setItem('DaMoney', DaMoney); // Save money
    multii.innerHTML = multiplier;
    localStorage.setItem('multiplier', multiplier); // Save multiplier
    updateTotalClicks();
}

function updateTotalClicks() {
    totalClicks += 1;
    tClicks.innerHTML = totalClicks;
    localStorage.setItem('totalClicks', totalClicks); // Save total clicks
    startCount();
}

function startCount() {
    counted += 1;
    localStorage.setItem('counted', counted); // Save total counted

    if (counted >= 1000) {
        multiplier += 0.5; // Increment multiplier by 0.5
        localStorage.setItem('multiplier', multiplier); // Save updated multiplier
        multii.innerHTML = multiplier; // Update UI
        counted = 0;
    }
}


function moneyClick() {
    DaMoney += 1 * multiplier;
    updateMoney();
}

// buyOne and up save purchases 🍟
function buyOne() {
    if (DaMoney >= priceOne && !purchasedOne) {
        DaMoney -= priceOne;
        priceOne = 0;
        purchasedOne = true;
        localStorage.setItem('purchasedOne', 'true');
        buyOneClear();
        updateMoney();
    }
}

function buyOneClear() {
    One.innerHTML = "9072041919";
    imgBuyOne.innerHTML = "PURCHASED!!!";
}

function buyTwo() {
    if (DaMoney >= priceTwo && !purchasedTwo) {
        DaMoney -= priceTwo;
        priceTwo = 0;
        purchasedTwo = true;
        localStorage.setItem('purchasedTwo', 'true');
        buyTwoClear();
        updateMoney();
    }
}

function buyTwoClear() {
    Two.innerHTML = "7382547826";
    imgBuyTwo.innerHTML = "PURCHASED!!!";
}

function buyThree() {
    if (DaMoney >= priceThree && !purchasedThree) {
        DaMoney -= priceThree;
        priceThree = 0;
        purchasedThree = true;
        localStorage.setItem('purchasedThree', 'true');
        buyThreeClear();
        updateMoney();
    }
}

function buyThreeClear() {
    Three.innerHTML = "3729163482";
    imgBuyThree.innerHTML = "PURCHASED!!!";
}

function buyFour() {
    if (DaMoney >= priceFour && !purchasedFour) {
        DaMoney -= priceFour;
        priceFour = 0;
        purchasedFour = true;
        localStorage.setItem('purchasedFour', 'true');
        buyFourClear();
        updateMoney();
    }
}

function buyFourClear() {
    Four.innerHTML = "4057791862";
    imgBuyFour.innerHTML = "PURCHASED!!!";
}

function buyFive() {
    if (DaMoney >= priceFive && !purchasedFive) {
        DaMoney -= priceFive;
        priceFive = 0;
        purchasedFive = true;
        localStorage.setItem('purchasedFive', 'true');
        buyFiveClear();
        updateMoney();
    }
}

function buyFiveClear() {
    Five.innerHTML = "8326429372";
    imgBuyFive.innerHTML = "PURCHASED!!!";
}

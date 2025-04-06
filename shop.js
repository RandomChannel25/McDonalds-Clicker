function RESET() {
    // Clear all saved data in localStorage
    localStorage.removeItem('DaMoney');
    localStorage.removeItem('purchasedOne');
    localStorage.removeItem('purchasedTwo');
    localStorage.removeItem('purchasedThree');
    localStorage.removeItem('purchasedFour');
    localStorage.removeItem('purchasedFive');

    // Reset all variables to initial state
    DaMoney = 0;
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

    // Update the UI to reflect the reset state
    Money.innerHTML = DaMoney;

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
    moneyClick()
}
}

  // Function called when the switch is ON
  function spaceClick() {
    if (switchState === 1) {
    moneyClick()
}
}







// Initialize variables
var DaMoney = parseInt(localStorage.getItem('DaMoney')) || 0;
var priceOne = 50;
var priceTwo = 500;
var priceThree = 1000;
var priceFour = 1500;
var priceFive = 2500;

// Load saved progress (purchase status)
var purchasedOne = localStorage.getItem('purchasedOne') === 'true';
var purchasedTwo = localStorage.getItem('purchasedTwo') === 'true';
var purchasedThree = localStorage.getItem('purchasedThree') === 'true';
var purchasedFour = localStorage.getItem('purchasedFour') === 'true';
var purchasedFive = localStorage.getItem('purchasedFive') === 'true';

// Update Money on page load
Money.innerHTML = DaMoney;

// Load purchase status
if (purchasedOne) {
    One.innerHTML = "9072041919";
    imgBuyOne.innerHTML = "PURCHASED!!!";
    priceOne = 0;
}

if (purchasedTwo) {
    Two.innerHTML = "7382547826";
    imgBuyTwo.innerHTML = "PURCHASED!!!";
    priceTwo = 0;
}

if (purchasedThree) {
    Three.innerHTML = "3729163482";
    imgBuyThree.innerHTML = "PURCHASED!!!";
    priceThree = 0;
}

if (purchasedFour) {
    Four.innerHTML = "4057791862";
    imgBuyFour.innerHTML = "PURCHASED!!!";
    priceFour = 0;
}

if (purchasedFive) {
    Five.innerHTML = "8326429372";
    imgBuyFive.innerHTML = "PURCHASED!!!";
    priceFive = 0;
}

// Function to update money and save it in localStorage
function updateMoney() {
    Money.innerHTML = DaMoney;
    localStorage.setItem('DaMoney', DaMoney); // Save money in localStorage
}

function moneyClick() {
    DaMoney += 1;
    updateMoney();
}

// Function for purchase actions and saving them in localStorage
function buyOne() {
    if (DaMoney >= priceOne && !purchasedOne) {
        DaMoney -= priceOne;
        priceOne = 0;
        purchasedOne = true;
        localStorage.setItem('purchasedOne', 'true'); // Save purchase status
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
        localStorage.setItem('purchasedTwo', 'true'); // Save purchase status
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
        localStorage.setItem('purchasedThree', 'true'); // Save purchase status
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
        localStorage.setItem('purchasedFour', 'true'); // Save purchase status
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
        localStorage.setItem('purchasedFive', 'true'); // Save purchase status
        buyFiveClear();
        updateMoney();
    }
}

function buyFiveClear() {
    Five.innerHTML = "8326429372";
    imgBuyFive.innerHTML = "PURCHASED!!!";
}

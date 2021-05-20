let cardsArr = ["img/vase-cat.png", 
                "img/tiny-kitten.png", 
                "img/charger-kitten.png",
                "img/food-cat.png", 
                "img/liquid-cat.png",
                "img/loaf-cat.png",
                "img/pizza-cat.png",
                "img/president-cat.png",
                "img/programmer-cat.png",
                "img/stuffed-cat.png",
                "img/toilet-cat.png",
                "img/wine-cat.png"]

function getRandomNumberUpToANumber(biggest) {
    return Math.floor(Math.random() * (biggest + 1))
}

function selectNElements (arr, n) {
    while (arr.length > n) {
        arr.splice(getRandomNumberUpToANumber(arr.length - 1), 1)
    }
    return arr
}

let arrOf6Cards = selectNElements(cardsArr, 6)

let arrOf12Cards = arrOf6Cards.concat(arrOf6Cards)

var elems = document.getElementsByClassName("front-face");
for (var i = 0; i < 12; i+= 1) {
    elems[i].src = arrOf12Cards[i];
}
//this selects all memory-card elments
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false
let lockBoard = false;
let firstCard, secondCard;

//the "this" variable represents the card that was clicked
//this function accesses the element's classList and activate the flip class
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    //TODO
 if (firstCard.innerHTML === secondCard.innerHTML) {

    disableCards();
 
    return;
 
  }
 
 
  unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
     lockBoard = true;
     setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');
         resetBoard()
        }, 1500);
    }
    
    
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    
    
    (function shuffle() {
        cards.forEach(card => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        });
        
    })();
    
    //this makes that every time a card gets clicked flipCard function will be fired
    cards.forEach(card => card.addEventListener('click', flipCard))



    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
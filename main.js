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

//TODO the pair of cards should be different
// maybe making an array with the unordered sources, and popping the ones I use
// maybe creating an array with unique sources and using that

let notDupArr = ["first", "second", "third", "fourth", "fifth", "sixth"]
let dupArr = ["first-dup", "second-dup", "third-dup", "fourth-dup", "fifth-dup", "sixth-dup"]

notDupArr.forEach(
x => document.getElementById(x).src = cardsArr[getRandomNumberUpToANumber(cardsArr.length - 1)]
)

notDupArr.forEach( x =>
 document.getElementById(x + "-dup").src = document.getElementById(x).src 
)

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


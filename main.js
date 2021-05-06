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

function iterateArr (arr) {
    for (let x of array) {
        f(x)
    }
}
notDupArr.forEach(
x => document.getElementById(x).src = cardsArr[getRandomNumberUpToANumber(cardsArr.length - 1)]
)

notDupArr.forEach( x =>
 document.getElementById(x + "-dup").src = document.getElementById(x).src 
)

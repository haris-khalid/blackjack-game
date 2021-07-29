let arrcard = []
let sum = 0
let playerN = {
    name: "Per",
    chips: 200
}
let hasBlackJack = false

let isAlive = true
let message = ""
let messageEl = document.getElementById("message")
// 2. Store the sum paragraph in a variable called sumEl
// let sumEl = document.querySelector("body")
let sumEl = document.getElementById("sum")

let cardEL = document.getElementById("card")
let playerEl = document.getElementById("player")

playerEl.textContent = playerN.name + ": $" + playerN.chips

function getrandom() {

    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function StartGame() {
    let isAlive = true
    let firstCard = getrandom()

    let secondCard = getrandom()
    let arrcard = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {


    // cardEL.textContent= "cards:"+arrcard[0]+ "  and " + arrcard[1]
    card.textContent = "cards:"
    for (let i = 0; i < arrcard.length; i++) {
        card.textContent += arrcard[i] + " "
    }

    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    //alert("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false) {  
        let card = getrandom();

    sum += card

    arrcard.push(card)



    renderGame()
    messageEl.textContent = message
    }
}
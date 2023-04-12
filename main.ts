// declaring variables with types
let cards: Array<number> = [] 
let sum: number = 0
let hasBlackJack: boolean = false
let isAlive: boolean = false
let message: string = ""

interface userType{
    name: string,
    prize: number,
}
const user: userType = {
    name : "Muhammad Aamir Zaman",
    prize : 200,
}

// accessing DOM elements
let messageEl: HTMLElement | null = document.getElementById("message-el")
let sumEl: HTMLElement | null = document.getElementById("sum-el")
let cardsEl: HTMLElement | null = document.getElementById("cards-el")
let userEl: HTMLElement | null = document.getElementById('user-info')


if(userEl !==null){
    userEl.textContent = `${user.name} : $${user.prize}`;
}

// generates a random number (1 to 13) and floor its output.
function getRandomCard(): number{
    let randomNumber:number = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(): void {
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1];
    renderGame()
}

// displays cards and checks if user got blackjack or user wants to draw a card or he is out of the game
function renderGame(): void| null {
    if(!cardsEl || !sumEl) return null
        
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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
    
    if(messageEl !== null){
        messageEl.textContent = message
    }
}

// checks if user is eligible for card draw and generates a random card for user
function newCard(): void {
    if(isAlive && !hasBlackJack){
    let card: number = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

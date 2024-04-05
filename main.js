let firstCard = 0
let secondCard = 0
let drawCard = 0
let drawSum = drawCard
let drawStore = []
let sum = 0
let userMessage = ""
let blackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let showCards = document.getElementById("cards")
let showSum = document.getElementById("sum")
let newCardBtn = document.getElementById("newcard")
let startGameBtn = document.getElementById("button")
let playerEl = document.getElementById("player-el")
let nameTag = document.getElementById("name-tag")
let nameText = document.getElementById("your-name")

let player = {
    name: '',
    chips: 300
}

/* hide elements on the screen */
showCards.style.display = "none";
showSum.style.display = "none";
playerEl.style.display = "none";

/* display player name and chips */
playerEl.textContent = player.name + "  $: " + player.chips

function winCondition(player) {
    /* Win conditions */
    if (sum === 21) {
        userMessage = "YOU'VE GOT BLACKJACK!!!"
        blackJack = true
        player.chips += 10
    } else if (sum < 21) {
        userMessage = "Do you want to draw another card?"
    } else {
        userMessage = "You've lost"
        isAlive = false
        player.chips -= 6
    }
}

function startGame() {
    /* resets everything */ //might want to change this to a button that refresh the page when clicked
    firstCard = 0
    secondCard = 0
    drawCard = 0
    drawStore = []
    sum = 0
    drawSum = 0
    isAlive = true
    blackJack = false

    /* stores player name on the player object */
    player.name = document.getElementById('name-tag').value;

    /* hides and displays elements on the screen when you start the game */
    showCards.style.display = "flex";
    showSum.style.display = "flex";
    playerEl.style.display = "flex";
    nameTag.style.display = "none";
    nameText.style.display = "none";


    /* assign a random number to first and second card vars */
    firstCard = Math.floor((Math.random() * 11) +1);
    secondCard = Math.floor((Math.random() * 11) +1);

    /* update sum */
    sum = firstCard + secondCard;
    drawStore.push(firstCard, ' ' + secondCard)

    winCondition(player)

    /* change the main button to restart and display the cards and sum */
    messageEl.textContent = userMessage;
    startGameBtn.textContent = "RESTART GAME!"
    showCards.textContent = 'Cards: ' + drawStore;
    showSum.textContent = 'Sum: ' + sum;

    /* display player name and chips */
    playerEl.textContent = player.name + "  $: " + player.chips

    /* make the draw card button visible */
    newCardBtn.style.display = "flex";
}

function newCard() {
    drawCard = Math.floor((Math.random() * 11) +1);
    drawSum += drawCard
    drawStore.push(' ' + drawCard)
    sum = firstCard + secondCard + drawSum;

    winCondition(player)

    /* draw card button dissapear when you win the game */
    if (blackJack === true || isAlive === false) {
        newCardBtn.style.display = "none";
    }

    messageEl.textContent = userMessage;
    showCards.textContent = 'Cards: ' + drawStore;
    showSum.textContent = 'Sum: ' + sum;

    /* display player name and chips */
    playerEl.textContent = player.name + "  $: " + player.chips

}
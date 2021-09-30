//array
let cards = [];

let blackJack = false;
let isAlive = false;
let message="";

let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl =document.getElementById("cards-el");

//creating objects
let player = {
    name = "Per",
    chips = 145
}

playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard(){
    let num = Math.floor(Math.random() *13)+1;
    if(num === 1){
        return 11;
    }
    else if(num>10){
        return 10;
    }
    else{
        return num;
    }
}

function startGame(){
    alive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard+secondCard;
    renderGame();
}

function renderGame(){
    cardEl.textContent= "Cards: ";

    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum === 21){
        message = "Blackjack !!!";
        blackJack=true;
    }
    else if(sum < 21){
        message = "Pick another card";
    }
    else{
        message = "Oops! Sorry... Try Again.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(alive===true && blackJack===false){
        let card = getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}
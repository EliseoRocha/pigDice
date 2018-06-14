class Game {
    constructor(numPointsToWin) {
        this.pointsToWin = numPointsToWin;
        this.gameTotalPlayer1 = 0;
        this.gameTotalPlayer2 = 0;
        this.currentTurnTotal = 0;
        this.currentPlayer = 1;
    }
    getGameTotal(playerNum) {
        if (playerNum == 1)
            return this.gameTotalPlayer1;
        else if (playerNum == 2)
            return this.gameTotalPlayer2;
        else
            return null;
    }
    rollDie() {
        let roll = getRandomIntegerValue(1, 6);
        if (roll == 1) {
            this.passTurn();
        }
        this.currentTurnTotal += roll;
        if (this.currentPlayer == 1) {
            if (this.currentTurnTotal + this.gameTotalPlayer1 >= this.pointsToWin) {
                this.gameState = "finished";
            }
        }
        return roll;
    }
    passTurn() {
        this.currentTurnTotal = 0;
        this.currentPlayer = (this.currentPlayer == 1) ? 2 : 1;
    }
}
function getRandomIntegerValue(minValue, maxValue) {
    minValue = Math.floor(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}
let pigGame = new Game(25);
window.onload = function () {
    document.getElementById("roll").onclick = roll;
    document.getElementById("pass").onclick = passTurn;
};
function passTurn() {
    console.log(passTurn);
}
function roll() {
    let dieRoll = pigGame.rollDie();
    displayMessage("You rolled a " + dieRoll);
    if (dieRoll == 1) {
        displayMessage("Your turn is over!");
    }
}
function displayMessage(msg) {
    let numMessages = document.querySelectorAll("#output>p");
    if (numMessages.length == 5) {
        numMessages[4].remove();
    }
    let oldText = document.getElementById("output").innerHTML;
    let display = "<p>" + msg + "</p>";
    document.getElementById("output").innerHTML = display + oldText;
}

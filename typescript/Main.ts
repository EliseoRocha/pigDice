let pigGame = new Game(25);

window.onload = function(){

    document.getElementById("roll").onclick = roll;
    document.getElementById("pass").onclick = passTurn;
}

function passTurn(){
    console.log(passTurn);
}

/**
 * When the user clicks roll button
 */
function roll(){
    let dieRoll:number = pigGame.rollDie();
    displayMessage("You rolled a " + dieRoll);

    if(dieRoll == 1){
        displayMessage("Your turn is over!");
    }
}

function displayMessage(msg:string){

    let numMessages = document.querySelectorAll("#output>p");
    if(numMessages.length == 5){
        numMessages[4].remove();
    }

    let oldText = document.getElementById("output").innerHTML;
    let display = "<p>" + msg + "</p>";
    document.getElementById("output").innerHTML = display + oldText;


    /*
    let p = document.createElement("p");
    let textNode = document.createTextNode(msg);

    p.appendChild(textNode);

    document.getElementById("output").appendChild(p);
    */
}
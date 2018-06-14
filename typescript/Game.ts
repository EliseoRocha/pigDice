//put game class here
//Store gameState as enumeration
class Game{

    private gameTotalPlayer1:number;
    private gameTotalPlayer2:number;
    private currentPlayer:number;
    private gameState:string //started, playing, finished
    private currentTurnTotal:number;
    private pointsToWin:number;

    constructor(numPointsToWin:number){
        this.pointsToWin = numPointsToWin;
        this.gameTotalPlayer1 = 0;
        this.gameTotalPlayer2 = 0;
        this.currentTurnTotal = 0;
        this.currentPlayer = 1;
    }

    getGameTotal(playerNum:number):number{
        if(playerNum == 1)
            return this.gameTotalPlayer1;
        else if(playerNum == 2)
            return this.gameTotalPlayer2;
        else
            return null;
    } 

    /**
     * Gets a random number between 1 and 6
     * Returns a random roll value
     */
    rollDie():number{
        let roll = getRandomIntegerValue(1,6);
        if(roll == 1){
            this.passTurn();
        }
        this.currentTurnTotal += roll;

        if(this.currentPlayer == 1 ){
            if(this.currentTurnTotal + this.gameTotalPlayer1 >= this.pointsToWin){
                this.gameState = "finished";
            }
        }
        return roll;
    }

    passTurn(){
        //reset turn total
        this.currentTurnTotal = 0;

        //conditional/ternary operator, same as below
        this.currentPlayer = (this.currentPlayer == 1) ? 2 : 1;
       
        /*
        if(this.currentPlayer == 1){
            this.currentPlayer = 2;
        }
        else{
            this.currentPlayer = 1;
        }
        */
    }  
}

/**
 * Gets an integer random value
 * @param minValue The inclusive min value integer
 * @param maxValue The inclusive max value integer
 */
function getRandomIntegerValue(minValue:number, maxValue:number):number{
    //truncates decimal value
    //Math.trunc works but not usable in IE
    minValue = Math.floor(minValue);
    maxValue = Math.floor(maxValue);

    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}
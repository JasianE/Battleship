function Gamelogic(Gameboard, TurnNumber){
    //Create a random move for the computer to do
    function createRandom(){
        let move = Math.floor(Math.random() * 64) + 1
        return move
    }
    //Check whether or not the computerr turn if yes 
    while(Gameboard.isDone() === false){
        //if yes 
        if(TurnNumber % 2 !== 0){
            let i = 1;
            //increment turnnumber so the plyer
            TurnNumber = TurnNumber + 1
            //Deekship funny but also will be the variable that checks if the attack works
            let derekShip = createRandom()
            //Keep going until it works
            //You know your first try you created bogosort which is epic
            while(Gameboard.hitsLocation.indexOf(derekShip) !== -1 || Gameboard.misses.indexOf(derekShip) !== -1){
                derekShip = i
                i = i + 1
            }
            //Finally receive the attack
            const hitOrMissIguessINeverMissHuhIwantToDie = Gameboard.receiveAttack(derekShip)
            const info = [Gameboard.misses, Gameboard.hitsLocation, hitOrMissIguessINeverMissHuhIwantToDie]
            //Finally show it
            return(info)
        }
    }
    return false
}

export default Gamelogic
import FindInfo from './FindInfo.js'

function player(name){
    //Create Varabiel?????
    const playerName = name
    let turnNumber = 0;

    //Methods (thanks jun for the descriptive)

    //Determines if yeah
    const turn = () => {
        if(turnNumber % 2 === 0){
            turnNumber = turnNumber + 1
            
        }
        else{
            turnNumber = turnNumber + 1
        }
    }
    //Takes key, hits, hitslocation, misses, and occupied info, first determines if the hit has already been done
    //If attack ahs already been done it simpl returns false and player or computer does it again
    //Orhwewies it first check if the hit is acualy a hit which if it is it pushes alll the info 
    //Elsewise it simply puhes it to the misses
    //Retursn teh neew gameboard information
    const attack = (gameboard, key) => {
        if(gameboard.misses.indexOf(key.number) === -1 && gameboard.hits.indexOf(key.number) === -1){
            if(key.placed === true){
                key.hit = true
                let name = Object.getOwnPropertyNames(FindInfo(gameboard.occupiedInfo, key.number))[0]
                
                gameboard.hits.map(function(leet){
                    if(Object.keys(leet)[0] === name){
                        leet[name].push(key.number)
                    }
                    return leet
                })
                gameboard.occupiedInfo.map(function(pee){
                    if(pee.name === name){
                        pee.hit(key.number)
                        return true
                    }
                })
                gameboard.hitsLocation.push(key.number)
            }
            else{
                key.hit = true
                gameboard.misses.push(key.number)
            }
            return(gameboard)
        }
        return false
    }
    return{
        playerName,
        turn,
        attack
    }
}
export default player
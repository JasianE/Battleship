import Gameboard from './Factories/Gameboard'
function GenerateEnemyBoard(){
    //Generate variables that hold the locations for each ship and create new enemy gameboard
    let enemy = new Gameboard()
    let carrierLocation = []
    let battleShipLocation = []
    let submarineLocation = []
    let destroyerLocation = []
    let speedBoatLocation = []
    //Iterate and assign value to each location variable
    let placements = []
    for(let i = 1; i < 65; i++){
        placements.push(i)
    }
    let random = Math.floor(Math.random() * 64) + 1
    while(carrierLocation.length === 0){
        if((random > 4 && random < 9) || (random > 12 && random < 17) || (random > 20 && random < 25) ||
        (random > 28 && random < 33) || (random > 36 && random < 41) || 
        (random > 44 && random < 49) || (random > 52 && random < 57) || (random > 59)){
            random = Math.floor(Math.random() * 64) + 1
        }
        else{
            carrierLocation.push(random)
            placements.splice(placements.indexOf(random), 1)
            for(let i = 1; i < 5; i++){
                //loop through and put every corresponding tile's placed property as true and push their location to the locations array
                carrierLocation.push(random + i)
                placements.splice(placements.indexOf(random + i), 1)
            }
        }
    }
    let pooptruck = Math.floor(Math.random() * 64) + 1
    while(battleShipLocation.length === 0){
        if((pooptruck > 5 && pooptruck < 9) || (pooptruck > 13 && pooptruck < 17) || (pooptruck > 21 && pooptruck < 25) ||
        (pooptruck > 29 && pooptruck < 33) || (pooptruck > 37 && pooptruck < 41) || 
        (pooptruck > 45 && pooptruck < 49) || (pooptruck > 53 && pooptruck < 57) || (pooptruck > 60)){
            pooptruck = Math.floor(Math.random() * 64) + 1
        }
        else if(placements.indexOf(pooptruck) === -1 || placements.indexOf(pooptruck + 1) === -1 || placements.indexOf(pooptruck + 2) === -1 
        || placements.indexOf(pooptruck + 3) === -1){
            pooptruck = Math.floor(Math.random() * 64) + 1
        }
        else{
            battleShipLocation.push(pooptruck)
            placements.splice(placements.indexOf(pooptruck), 1)
            for(let i = 1; i < 4; i++){
                battleShipLocation.push(pooptruck + i)
                placements.splice(placements.indexOf(pooptruck +i), 1)
            }
        }
    }
    let derekShip = Math.floor(Math.random() * 64) + 1
    while(destroyerLocation.length === 0){
        if((derekShip > 6 && derekShip < 9) || (derekShip > 14 && derekShip < 17) || (derekShip > 22 && derekShip < 25) ||
        (derekShip > 30 && derekShip < 33) || (derekShip > 38 && derekShip < 41) || 
        (derekShip > 46 && derekShip < 49) || (derekShip > 54 && derekShip < 57) || (derekShip > 61)){
            derekShip = Math.floor(Math.random() * 64) + 1
        }
        else if(placements.indexOf(derekShip) === -1 || placements.indexOf(derekShip + 1) === -1 || placements.indexOf(derekShip + 2) === -1 ){
            derekShip = Math.floor(Math.random() * 64) + 1
        }
        else{
            destroyerLocation.push(derekShip)
            placements.splice(placements.indexOf(derekShip), 1)
            for(let i = 1; i < 3; i++){
                destroyerLocation.push(derekShip + i)
                placements.splice(placements.indexOf(derekShip +i), 1)
            }
        }
    }
    let perekShip = Math.floor(Math.random() * 64) + 1
    while(submarineLocation.length === 0){
        if((perekShip > 6 && perekShip < 9) || (perekShip > 14 && perekShip < 17) || (perekShip > 22 && perekShip < 25) ||
        (perekShip > 30 && perekShip < 33) || (perekShip > 38 && perekShip < 41) || 
        (perekShip > 46 && perekShip < 49) || (perekShip > 54 && perekShip < 57) || (perekShip > 61)){
            perekShip = Math.floor(Math.random() * 64) + 1
        }
        else if(placements.indexOf(perekShip) === -1 || placements.indexOf(perekShip + 1) === -1 || placements.indexOf(perekShip + 2) === -1 ){
            perekShip = Math.floor(Math.random() * 64) + 1
        }
        else{
            submarineLocation.push(perekShip)
            placements.splice(placements.indexOf(perekShip), 1)
            for(let i = 1; i < 3; i++){
                submarineLocation.push(perekShip + i)
                placements.splice(placements.indexOf(perekShip +i), 1)
            }
        }
    }
    let doobShip = Math.floor(Math.random() * 64) + 1
    while(speedBoatLocation.length === 0){
        if((doobShip > 7 && doobShip < 9) || (doobShip > 15 && doobShip < 17) || (doobShip > 23 && doobShip < 25) ||
        (doobShip > 31 && doobShip < 33) || (doobShip > 39 && doobShip < 41) || 
        (doobShip > 47 && doobShip < 49) || (doobShip > 55 && doobShip < 57) || (doobShip > 62)){
            doobShip = Math.floor(Math.random() * 64) + 1
        }
        else if(placements.indexOf(doobShip) === -1 || placements.indexOf(doobShip + 1) === -1 || placements.indexOf(doobShip + 2) === -1 ){
            doobShip = Math.floor(Math.random() * 64) + 1
        }
        else{
            speedBoatLocation.push(doobShip)
            placements.splice(placements.indexOf(doobShip), 1)
            for(let i = 1; i < 2; i++){
                speedBoatLocation.push(doobShip + i)
                placements.splice(placements.indexOf(doobShip +i), 1)
            }
        }
    }

    //Create the actual properties
    enemy.place('Carrier', carrierLocation)
    enemy.place('Battleship', battleShipLocation)
    enemy.place('Destroyer', destroyerLocation)
    enemy.place('Submarine', submarineLocation)
    enemy.place('Speedboat', speedBoatLocation)

    //Make sure that each element has the placed property that has been placed

    enemy.elements = enemy.elements.map(function(key){
        if(enemy.occupied.indexOf(key.number) !== -1){
            key.placed = true
        }
        
        return key
    })

    return enemy
}

export default GenerateEnemyBoard
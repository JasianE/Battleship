import Ship from './Ship'
import FindInfo from './FindInfo.js'

function Gameboard(){
    //Create Gameboard Methods

    //Takes two parameters, name location, and pushes them to the gameboards properties occupied and occupied info, the key differnece being
    //One is dumb and the other not dumb but like the occupied = [1223,2,32,323,23,23] while occupiedInfo = [{speed: [3[3[3[3[33[3[3[]]]]]]]]}]
    const place = (name, location) => {
        occupiedInfo.push(new Ship(name, location))
        occupied.push(...location)
        let thing = {
        }
        thing[name] = []
        hits.push(thing)
    }
    //Receives attack and pushes it to either hit or miss i gets nthey nmis niel cicicera
    const receiveAttack = (attackLocation) => {
        if(occupied.indexOf(attackLocation) !== -1){
            hitsLocation.push(attackLocation)
            let name = Object.getOwnPropertyNames(FindInfo(occupiedInfo, attackLocation))[0]
            hits.map(function(key){
                if(Object.keys(key)[0] === name){
                    key[name].push(attackLocation)
                }
                return key
            })
            occupiedInfo.map(function(derekJeter){
                if(derekJeter.name === name){
                    derekJeter.hit(attackLocation)
                    return true
                }
            })
            return true
        }
        misses.push(attackLocation)
        return false
    }
    //Checks if the game is done or not
    const isDone = () => {
        if(occupied.length === hitsLocation.length){
            return true
        }
        return false
    }
    //Create Game Board Tiles
    //Look im going from botto to top even though it should be revers.ed.. because they all get hoisted the same right?? unless its different in which
    //case dang but it works so yay!!!
    let elements = []

    for(let i = 1; i < 65; i++){
        let thing = {
            number: i,
            placed: false,
            hit: false
        }
        elements.push(thing)
    }
    //Create Occupied Tiles
    let occupied = []
    let occupiedInfo = []

    //Keep Track of Hits and Misses
    let hits = []
    let hitsLocation = []
    let misses = []

    return{
        elements,
        occupied,
        occupiedInfo,
        hits,
        hitsLocation,
        misses,
        place,
        receiveAttack,
        isDone
    }
}

export default Gameboard
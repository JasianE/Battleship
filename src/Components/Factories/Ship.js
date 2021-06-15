function Ship(name,location){
    //Create the things that will see if sunk?
    const hits = []
    
    const hit = (place) => {
        if(location.indexOf(place) !== -1){
            hits.push(place)
        }
    }
    //SEe if sjnk
    const isSunk = () => {
        if(hits.length === location.length){
            return true
        }
        return false
    }
    return{
        name,
        location,
        hits,
        hit,
        isSunk
    }
}
export default Ship
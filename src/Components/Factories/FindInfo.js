function FindInfo(array, search){
    //Obtain object that contains the search query
    let obj = array.find(o => o.location.indexOf(search) !== -1)
    if(obj === undefined){
        return false
    }
    //Find name and store it
    let nae = obj.name
    //Create object that holds the information needed
    let thing = {
    }
    //Create object property that holds its location
    thing[nae] = search
    //Return it :)
    return thing
}

export default FindInfo
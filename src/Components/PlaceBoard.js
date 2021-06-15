import React, {useState, useEffect} from 'react'
import Gameboard from './Factories/Gameboard'
import Game from './Game'
import GenerateEnemyBoard from './GenerateEnemyBoard'
import '../Styles/Board.css'
function PlaceBoard(){
    //Create Gameboard information and whatnot that will be used for all the logic here btw im writing this comment 3 days after writing the code because jun you 
    //suck big but
    const [select, setSelect] = useState(new Gameboard())
    //Create enemy board for the game
    const [enemy, setEnemy] = useState()
    //Determine which ship gets placed and when to start next component
    const [iterations, setIterations] = useState(0)

    //SEt Enemy Board Once
    useEffect(() => {
        setEnemy(GenerateEnemyBoard())
    }, [])
    return(
        <div>
            {/*Map through the gameboard elements and conditionally check whether or not all ships have been placed*/}
            {iterations === 5 ? 
                //Pass in both boards as props so epic
                <Game player = {select} enemy = {enemy}/> :
            <div>
                <h1>Place Your Ships!</h1>
                <hr></hr>
                <div className = 'placeBoardContainer'>
                    {/*This is the place where I actually map through the gameboard, conditionally checking whether to have the tile be represented as placed
                    or not */}
                    {
                        select.elements.map(function(key){
                            return(
                            <div className = {key.placed ? 'placed' : 'tile'} id = {key.number} key= {key.number} onClick= {() => {
                                //Checking if the placement is illegal with crappy conditional code (how do i simplify this?!?!??)
                                if(iterations === 0){
                                    //Check easiest stuff aka if the tile has already been placed or not
                                    if(key.placed === true || select.elements[key.number].placed === true || select.elements[key.number + 1].placed === true ||
                                        select.elements[key.number + 2].placed === true || select.elements[key.number + 3] === true){
                                        alert('No')
                                    }
                                    //check if it goes out of bounds or not
                                    else if((key.number > 4 && key.number < 9) || (key.number > 12 && key.number < 17) || (key.number > 20 && key.number < 25) ||
                                    (key.number > 28 && key.number < 33) || (key.number > 36 && key.number < 41) || 
                                    (key.number > 44 && key.number < 49) || (key.number > 52 && key.number < 57) || (key.number > 60))
                                    {
                                        alert('Bo')
                                    }
                                    else{
                                        //Create locations array
                                        let locations = [key.number]
                                        //Set key placed property to true
                                        key.placed = true
                                        for(let i = 0; i < 4; i++){
                                            //loop through and put every corresponding tile's placed property as true and push their location to the locations array
                                            select.elements[key.number + i].placed = true
                                            locations.push(key.number + i + 1)
                                        }
                                        //Use the CODE THAT I CREATED!!!!! to set the gaemboards occupied and occupied info
                                        //When youre refactoring this remember that you decided to implement more convoluted logic because you forgot you created
                                        // and tested the exact methods you needed for this
                                        // Remember to plan and use your fucking brain
                                        select.place('Carrier', locations)
                                        setSelect({
                                            ...select
                                        })
                                        setIterations(prevCount => prevCount + 1)
                                    }   
                                }
                                if(iterations === 1){
                                    //Same stuff which is why i need to do something but it works so 
                                    if(key.placed === true || select.elements[key.number].placed === true || select.elements[key.number + 1].placed === true ||
                                        select.elements[key.number + 2].placed === true){
                                        alert('No')
                                    }
                                    else if((key.number > 5 && key.number < 9) || (key.number > 13 && key.number < 17) || (key.number > 21 && key.number < 25) ||
                                    (key.number > 29 && key.number < 33) || (key.number > 37 && key.number < 41) || 
                                    (key.number > 45 && key.number < 49) || (key.number > 53 && key.number < 57) || (key.number > 61)){
                                        alert('Bo')
                                    }
                                    else{
                                        let locations = [key.number]
                                        key.placed = true
                                        for(let i = 0; i < 3; i++){
                                            select.elements[key.number + i].placed = true
                                            locations.push(key.number + i + 1)
                                        }
                                        select.place('Battleship', locations)
                                        setSelect({
                                            ...select
                                        })
                                        setIterations(prevCount => prevCount + 1)
                                    }                               
                                }
                                if(iterations === 2){
                                    if(key.placed === true || select.elements[key.number].placed === true || select.elements[key.number + 1].placed === true){
                                        alert('No')
                                    }
                                    else if((key.number > 6 && key.number < 9) || (key.number > 14 && key.number < 17) || (key.number > 22 && key.number < 25) ||
                                    (key.number > 30 && key.number < 33) || (key.number > 38 && key.number < 41) || 
                                    (key.number > 46 && key.number < 49) || (key.number > 54 && key.number < 57) || (key.number > 61)){
                                        alert('Bo')
                                    }
                                    else{
                                        let locations = [key.number]
                                        key.placed = true
                                        for(let i = 0; i < 2; i++){
                                            select.elements[key.number + i].placed = true
                                            locations.push(key.number + i + 1)
                                        }
                                        select.place('Destroyer', locations)
                                        setSelect({
                                            ...select
                                        })
                                        setIterations(prevCount => prevCount + 1)
                                    }
                                }
                                if(iterations === 3){
                                    if(key.placed === true || select.elements[key.number].placed === true || select.elements[key.number + 1].placed === true){
                                        alert('No')
                                    }
                                    else if((key.number > 6 && key.number < 9) || (key.number > 14 && key.number < 17) || (key.number > 22 && key.number < 25) ||
                                    (key.number > 30 && key.number < 33) || (key.number > 38 && key.number < 41) || 
                                    (key.number > 46 && key.number < 49) || (key.number > 54 && key.number < 57) || (key.number > 61)){
                                        alert('Bo')
                                    }
                                    else{
                                        let locations = [key.number]
                                        key.placed = true
                                        for(let i = 0; i < 2; i++){
                                            select.elements[key.number + i].placed = true
                                            locations.push(key.number + i + 1)
                                        }
                                        select.place('Submarine', locations)
                                        setSelect({
                                            ...select
                                        })
                                        setIterations(prevCount => prevCount + 1)
                                    }
                                }
                                if(iterations === 4){
                                    if(key.placed === true || select.elements[key.number].placed === true){
                                        alert('No')
                                    }
                                    else if((key.number > 7 && key.number < 9) || (key.number > 15 && key.number < 17) || (key.number > 23 && key.number < 25) ||
                                    (key.number > 31 && key.number < 33) || (key.number > 39 && key.number < 41) || 
                                    (key.number > 47 && key.number < 49) || (key.number > 55 && key.number < 57) || (key.number > 62)){
                                        alert('Bo')
                                    }
                                    else{
                                        let locations = [key.number, key.number + 1]
                                        key.placed = true
                                        select.elements[key.number].placed = true
                                        select.place('Speedboat', locations)
                                        setSelect({
                                            ...select
                                        })
                                        setIterations(prevCount => prevCount + 1)
                                    }
                                }
                            }}>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            }
        </div>
    )
}
export default PlaceBoard
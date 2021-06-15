import React, {useState, useEffect} from 'react'
import '../Styles/Board.css'
import Gamelogic from './Gamelogic'
import player from './Factories/Player'
import EndPage from './EndPage'

function Game(lmao){
    //Initialize a lot of state 
    //Player board used for generating player board and receiving random attack from computer logic, also used to determine if game is finished
    const [Player, setPlayer] = useState(lmao.player)
    
    //Computer Board, used for player to attack and to display enemy board, also used to determine if game is finished
    const [Computer, setComputer] = useState(lmao.enemy)

    //Create player objects that contain the CACACACACACpaict to attack method 
    const [User, setUser] = useState(new player('Derek'))
    
    //Create variable that will display what just happend ex: player ship just got sunk !!!2343123123
    const [Message, setMessage] = useState('')

    //Used to determine which player object goes
    const [TurnNumber, setTurnNumber] = useState(0)

    //Used to determine if game is done or not
    const [GameDone, setGameDone] = useState(0)

    useEffect(() => {
        if(TurnNumber % 2 !== 0){
            const info = Gamelogic(Player, TurnNumber)
            if(info !== false){
                const playerElements = Player.elements.map(function(key){
                    if(info[0].indexOf(key.number) !== -1 || info[1].indexOf(key.number) !== -1){
                        key.hit = true
                    }
                    return key
                })
                setPlayer(prevState => ({
                    ...prevState,
                    misses: info[0],
                    hits: info[1],
                    elements: playerElements
                }))
                setTurnNumber(prevState => prevState + 1)
                setMessage(createMessage(info[2]))
            }
            else{
                setGameDone(prevState => prevState + 1)
            }
        }
        else if(TurnNumber % 2 === 0){
            if(Computer.isDone()){
                setGameDone(prevState => prevState + 2)
            }
        }
    },[TurnNumber])

    //Create handle click method
    function handleClick(newGameboard){
        setComputer(newGameboard)
        setTurnNumber(prevstate => prevstate + 1)
    }
    //Create Create Message Method
    function createMessage(Esam){
        if(Esam === true){
            return 'The Computer Succesfully Hit!!!!!!'
        }
        return 'The Computer Missed...'
    }
    return(
        <div>
            {
                GameDone !== 0 ? <EndPage number = {GameDone}/> :

            <div>
                <div className = 'box'>
                    <h1>{Message}</h1>
                </div>
                <div className = 'playerBoard'>
                    {
                    //MAp through player elements
                    Player.elements.map(function(key){
                        return(
                            <div className = {key.placed ? (key.hit ? 'shucks' : 'placed') : key.hit ? 'miss' : 'tile'} id = {key.number} key = {key.number}>
                            </div>
                        )
                    })
                    }
                </div>
                <div className = 'computerBoard'>
                    {
                        //Map through computer elements
                        Computer.elements.map(function(key){
                            return(
                                <div className = {key.hit ? (key.placed ? 'correct' : 'miss'): 'tile'} id = {key.number} key = {key.number} onClick ={() => {
                                    if(key.hit === true){
                                        alert('Already been hit!')
                                        return false
                                    }
                                    else if(TurnNumber % 2 !== 0 ){
                                        alert('Wait your turn!')
                                        return false
                                    }
                                    handleClick(User.attack(Computer, key))
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
export default Game
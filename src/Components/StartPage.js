import React, {useState} from 'react'
import PlaceBoard from './PlaceBoard'
import "../App.css"

function StartPage(){
    //Check whether or not to start the game!!!! (well start the placing of the ships to start the game)
    const [ showComponent, setShowComponent]= useState(false)
    const [style, setStyle] = useState("Title")

    //Handles click and sets the show component to true which causes a rerender which fires teh tenerary to be like yeahhh and then [[[[[[[]]]]]]]
    const handleClick = () => {
        setShowComponent(true)
    }
    return(
        <div>
            {showComponent ?
                <PlaceBoard /> :
                <div className='Container'>
                    <h1 className={style} onMouseOver={(() => {setStyle('Title-active')})}>BattleShip!</h1>
                    <button onClick = {handleClick} className='Button'>Start</button>
                </div>
            }
        </div>
    )
}
export default StartPage
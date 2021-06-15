import React, {useState} from 'react'
import StartPage from './StartPage'

function EndPage(props){
    const [re, setRe] = useState(0)
    function handleClick(){
        setRe(1)
    }
    let number = props.number
    if(number === 1){
        number = 'Congratulations Player, You Have Lost! (:())'
    }
    else{
        number = 'Congratulations Derek JEter (neil cicierega) you have bested the computer....'
    }
    return(
        <div>
            {
                re === 1 ? <StartPage /> :
            <div>
            <h1>{number}</h1>
            <button onClick = {handleClick}>Play Again!</button>
            </div>

            }
        </div>
    )
}

export default EndPage
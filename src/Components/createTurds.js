//Date: March 13 2025
//Displays a segment of tiles to display what the user is currently hovering over

import React from "react";
import "../Styles/Board.css"
function createTurds(iterations){
    let components = []
    for(let i = 0; i < (5- iterations); i++){
        components.push(<div className="placed"></div>)
    }
    return(
        <div className="turd_container">
            <h2>{5 - iterations} ships left!</h2>
            {components.map((turd) => {
                return turd;
            })}
        </div>
    )
}

export default createTurds
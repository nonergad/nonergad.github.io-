import React from "react";
import './GameOverScr.css'

export default function GameOverWin({func}){
    return (
        <div className='GameOverScr'>
            <div className='GameOverMenu'>
                GameOver
                <button onClick={func}>Restart</button>
            </div>
        </div>
    );
}
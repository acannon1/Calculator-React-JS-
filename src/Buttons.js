import React from 'react';
import './Calc.css'

const Buttons = ({display, type, padHandleClick}) => {
    const btnHandleClick = () => {
        padHandleClick(display)
    }

    return (
        <div
            className={type==='number'? "numberBtn" : "calcBtn"}
            onClick={btnHandleClick}
        >
            {display}
        </div>
    )
}


export default Buttons;
import React from 'react';
import './Calc.css'

const Buttons = ({display, type, padHandleClick}) => {
    const btnHandleClick = () => {
        padHandleClick(display)
    }

    return (
        <div
            className={type==='number'? "btnDiv numberDiv" : "btnDiv calcDiv"}
        >
            <button
                type="button"
                className={
                    type==='number' ? "numberBtn" :
                    display==='CE' ? "clearBtn" :
                    display==='C' ? "clearBtn" :
                    display==='=' ? "equalBtn" :
                    "calcBtn"
                }
                onClick={btnHandleClick}
            >
                {display == 'sqrt' ? <span>&#8730;</span> :
                    display == 'x2' ? <span>x&#178;</span>:
                    display == '/' ? <span>&#xf7;</span>:
                    display == 'Delete' ? <span>&#8592;</span>:
                    display
                }
            </button>
        </div>
    )
}

export default Buttons;
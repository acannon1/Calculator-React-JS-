import React from 'react'
import './Calc.css'

const Display = ({number, v1, v2, op}) => {
    return (
        <div>
            <div>
                {v2} {op} {v1}
            </div>
            <div className="results">
                {number}
            </div>
        </div>
    )
}


export default Display;
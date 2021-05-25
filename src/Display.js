import React from 'react'
import './Calc.css'

const Display = ({results, history}) => {
    return (
        <div className="display">
            <div className="history">
                {history}
            </div>
            <div className="results">
                {results}
            </div>
        </div>
    )
}


export default Display;
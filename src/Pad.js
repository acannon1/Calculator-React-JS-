import React from 'react';
import Buttons from './Buttons.js'

const Pad = ({calcHandleClick}) => {
    const entryHandleClick = (input) => {
        calcHandleClick(input)
    }

    return (
        <div className="pad">
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='%' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='CE' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='C' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='Delete' type='action'/>
            </div>
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='1/x' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='x2' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='sqrt' type='action'/>
                <Buttons padHandleClick={entryHandleClick} display='/' type='action'/>
            </div>
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='7' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='8' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='9' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='x' type='action'/>
            </div>
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='4' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='5' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='6' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='-' type='action'/>
            </div>
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='1' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='2' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='3' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='+' type='action'/>
            </div>
            <div className="padRow">
                <Buttons padHandleClick={entryHandleClick} display='+/-' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='0' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='.' type='number'/>
                <Buttons padHandleClick={entryHandleClick} display='=' type='action'/>
            </div>
        </div>
    )
}


export default Pad;
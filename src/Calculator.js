import React, { useState, useEffect } from 'react';
import Pad from './Pad.js'
import Display from './Display.js'

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [history, setHistory] = useState('');
    const [op, setOp] = useState('');
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');


    const calcHandleClick = (input) => {
        if((input === 'C') || (input === 'CE')) {
            setV1('')
            setV2('')
            setOp('')
            setDisplay('')
            setHistory('')
        }
        else if (input === 'Delete') {
            let aaa = v1.substring(0, v1.length - 1)
            setV1(aaa)
            setDisplay(aaa)
        }
        else if (
            (input === '+') || 
            (input === '-') || 
            (input === '/') ||
            (input === 'x') ||
            (input === '='))
        {
            let aaa = 0;

            if((v1 === '') || (v2 === '')) {
                if(op !== '=') {
                    setV2(v1)
                    setHistory(v1 + ' ' + input)
                } else {
                    setHistory(v2 + ' ' + input)
                }
            }
            else {
                if(op === '+') {
                    aaa = parseFloat(v2) + parseFloat(v1)
                } else if(op === '-') {
                    aaa = parseFloat(v2) - parseFloat(v1)
                } else if(op === 'x') {
                    aaa = parseFloat(v2) * parseFloat(v1)
                } else if(op === '/') {
                    aaa = parseFloat(v2) / parseFloat(v1)
                }

                setV2(String(aaa))
                setDisplay(String(aaa))
                setHistory(aaa + ' ' + input)
            }            
                
            if(input === '=') {
                setHistory(history + ' ' + v1 + ' = ' + aaa)
            }

            setV1('')
            setOp(input)
        }
        else {
            let aaa = v1 + input
            setV1(aaa)
            setDisplay(aaa)
        }
    }

    return (
        <div className="calculator">
            <Display results={display} history={history}/>
            <Pad calcHandleClick={calcHandleClick}/>
        </div>
    );
}

export default Calculator;
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {useState, useEffect, useRef} from 'react';
import { postRequest, getRequest } from './config';
import "../dist/styles/login.scss"

import Hoc from './Hoc';
const RenderTimes = function ({count, setCount}) {
    // const x = useRef(0);
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    let z = 0;
    // useEffect(() => {
    //     x.current = x.current + 1;
    // });
    useEffect(() => {
        console.log('x = ', x);
        console.log('y = ', y);
        console.log('z = ', z);
    }, [y]);
    useEffect(() => {
        z = z+1;
    }, [x]);
    
    
    return (
        //  <div>Rendered {x.current} times</div>
         <div>
            <input type="button" value={x} onClick={() => { 
                setx(x+1)
            }} />
            <input type="button" value={y} onClick={() => sety(y+1)} />
         </div>
         
    )
}

export default RenderTimes;
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {useState, useEffect} from 'react';
import { postRequest, getRequest } from './config';
import "../dist/styles/login.scss";
import RenderTimes from './renderTimes';

import Hoc from './Hoc';

const Click = function ({count, setCount}) {

    return (
        // <input type="button" value={count} onClick={() => setCount(count+1)} />
        <div>
             <input type="button" value={count} onClick={() => setCount(count+1)} /> <br/> <br/>
             <RenderTimes />
        </div>
    )
}

export default Hoc(Click);
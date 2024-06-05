import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {useState, useEffect} from 'react';
import { postRequest, getRequest } from './config';
import "../dist/styles/login.scss"


import Hoc from './Hoc'
const Hover = function ({count, setCount}) {
    
  return (
      <div 
        onMouseOut={() => setCount(count+1)}
        style={{color: "red", fontSize: "20px"}}
      >
        Hovered {count} times
      </div>
  )
}

export default Hoc(Hover);
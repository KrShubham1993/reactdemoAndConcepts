import React from 'react';
import {useState, useEffect} from 'react';

const Hoc = function (Component) {
  // It needs to return / render, an entire component
  // and not jsut the JSX
  const HocComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count+1);
    }
    return (
        <Component count={count} setCount={increment} />
    )
  }
  return HocComponent
}



export default Hoc;
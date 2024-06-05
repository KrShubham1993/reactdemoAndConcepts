import React from 'react';
import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom/client';
import {useState, useEffect} from 'react';
import { postRequest, getRequest } from './config';
// import "../dist/styles/login.scss";

export default function LoginPage ({propVal}) {
    propVal= 'hilelele';
    console.log(propVal);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    var [x, setX]  = useState(10);
    // nested function 1
    const handleSubmit = function(e, n, p) {
        e.preventDefault();
        const body = {
            username: n,
            password: p
        }
        try {
          postRequest('/submitLoginDetails', body)
          // getRequest('/login')
          .then(res => {
            console.log(res);
            window.location = window.location.origin + '/fav'
          })
        } catch(e) {
          console.log('err -> ', e);
        }
    }
    const changeX = () => {
      setX(x+10);
      console.log(x);
    }
    return (
        <form id="logform" onSubmit={(e)=>handleSubmit(e, name, password)}>
        <label>
          Username:
          <input className="username" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </label><br/>
        <label>
          Password:
          <input className="password" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label><br/>
        <input type="submit" value="Submit"/>
        <input type="button" value={x} onClick={()=>changeX(name, password)}/>
        <div> x = {x} </div>
      </form>
    )
}



////////////////////    EXAMPLE for Higher Order Component

// import Click from './click'
// import Hover from './hover';
// import RenderTimes from './renderTimes';
// const LoginPage = function () {
//   return (
//     <div>
//       <a onactivate={() => alert('The text field has become active')}>Please click this text</a>
//       <Click/> <br/><br/><br/>
//       <Hover/><br/><br/>
//       <RenderTimes/> 
//     </div>
//   )
// }


// import WebWorkerComp from './webWorkerComp';
// const LoginPage = function () {
//   return (
//     <div>
//       <WebWorkerComp />
//     </div>
//   )
// }




// const root = createRoot(document.getElementById("root-login"));
// root.render(<LoginPage />)

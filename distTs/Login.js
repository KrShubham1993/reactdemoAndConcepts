"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const config_1 = require("../Components/config");
require("../dist/styles/login.scss");
const LoginPage = function ({ propVal }) {
    console.log(propVal);
    const [name, setName] = (0, react_2.useState)('');
    const [password, setPassword] = (0, react_2.useState)('');
    var [x, setX] = (0, react_2.useState)(10);
    const a = 22;
    // nested function 1
    const handleSubmit = function (e, n, p) {
        e.preventDefault();
        const body = {
            username: n,
            password: p
        };
        try {
            (0, config_1.postRequest)('/submitLoginDetails', body)
                // getRequest('/login')
                .then(res => {
                console.log(res);
                window.location = window.location.origin + '/fav';
            });
        }
        catch (e) {
            console.log('err -> ', e);
        }
    };
    const changeX = () => {
        setX(x + 10);
        console.log(x);
    };
    return (<form id="logform" onSubmit={(e) => handleSubmit(e, name, password)}>
        <label>
          Username:
          <input className="username" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label><br />
        <label>
          Password:
          <input className="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label><br />
        <input type="submit" value="Submit"/>
        <input type="button" value={x} onClick={() => changeX(name, password)}/>
        <div> x = {x} </div>
      </form>);
};
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
exports.default = App;

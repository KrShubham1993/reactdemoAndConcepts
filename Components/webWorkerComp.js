import React from 'react';
import {useState} from 'react';

const worker = new Worker('../webWorker.js');
worker.onmessage = (message) => {
    console.log('message received by created worker = ', message);
}
const webWorkerMessage = () => {
    worker.postMessage('getSum');
}

webWorkerMessage();

// function WebWorkerComp() {
//     const [col, setCol] = useState('red');
//   return (
//     <div style={{backgroundColor: col, width:'100%', height: '100%', textAlign: 'center'}}>
//         <input type="button" value="calculate Sum" onClick={() => webWorkerMessage()} />
//         <input type="button" value="Change background" onClick={() => col === 'red' ? setCol('green') : setCol('red')}/>
//     </div>
//   )
// }

// export default WebWorkerComp
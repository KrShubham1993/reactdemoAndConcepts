onmessage = (message) => {
    console.log('message received by worker script = ', message);
    let sum = 0;
    for(i=0; i<1000000; i++) {
        sum += i;
    }
    postMessage(sum);
}
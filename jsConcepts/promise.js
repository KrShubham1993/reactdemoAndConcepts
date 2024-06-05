
// console.log(myPromise)
function MyPromise(executor) {
    // on resolve our goal is to execute the callback function of .then part with 
    // the value passed to resolve func
    let resolveValue = '';
    let thenCallback;
    let isFulfilled = false;

    // IMPLEMENTING direct resolve() syntax to be used inside callback fn in -> new MyPromise(callback)
    function resolve(val) {
        // checking if .then was called before resolve() got executed i.e asynchronous resolve() case.
        if(typeof thenCallback === 'function') thenCallback(val);
        else {
            isFulfilled = true;// synchronous case, here we will call .then's callback there itself as we already have the resolved value
            resolveValue = val;
        }
    }
    this.then = function (callback) {
        if(isFulfilled) callback(resolveValue);// case where resolve is already executed when .then part is executing i.e promise resolved synchronously 
        else thenCallback = callback; // asynchronous case where .then is executed first -> here the callback will be called later when resolve gets executed.
    }

    
    
    // Similarly on execution of reject() our goal is to execute the callback of the .catch() part 
    //with the reject value
    let rejectReason = '';
    let catchCallback;
    let isRejected = false;

    function reject(reason) {
        if(typeof catchCallback === 'function') catchCallback(reason);
        else {
            isRejected = true;
            rejectReason = reason;
        }
    }
    this.catch = function (callback) {
        if(isRejected) callback(rejectReason);
        else catchCallback = callback;
    }

    executor(resolve,reject);
}

//////////////////////////       Implementing MyPromise.relove() syntax       /////////////////////
    // we need to write this outside and globally since the 'this' inside the function, only has
    // a value when the function is invoked or when new keyword is used to create an object
    // but MyPromise should be callable anywhere in the code i.e globally accessible.
MyPromise.resolve = (val) => new MyPromise((resolve, reject) => resolve(val));
MyPromise.reject = (reason) => new MyPromise((resolve, reject) => reject(reason));


//////////////////////////       Implementing MyPromise.all     /////////////////////
MyPromise.all = (promises) => {
    let resolvedArray = [],
        totalNotEmptyCellsInArray = 0; // we need this variable coz resolvedArray[3] = 'hi' would create an array of length 4 with first 3 cells empty.
    
    function executor(resolve,reject) {
        promises.forEach((promise,i) => {
            console.log('promise = ', promise);
            promise
            .then(val => {
                resolvedArray[i] = val;
                totalNotEmptyCellsInArray += 1;
                if(totalNotEmptyCellsInArray === promises.length) 
                    return resolve(resolvedArray);
            })
            promise.catch(err => reject(err))
        })
    }

    return new MyPromise(executor);
}

//////////////////////////       Implementing MyPromise.allSettled     /////////////////////
MyPromise.allSettled = (promises) => {
    let resolvedArray = [],
        totalNotEmptyCellsInArray = 0; // we need this variable coz resolvedArray[3] = 'hi' would create an array of length 4 with first 3 cells empty.
    
    function executor(resolve,reject) {
        try {
            promises.forEach((promise,i) => {
                // promise
                // .then(value => {
                //     resolvedArray[i] = {
                //         status: 'fulfilled',
                //         value
                //     };
                // })
                // .catch(reason => {
                //     resolvedArray[i] = {
                //         status: 'rejected',
                //         reason
                //     };
                // }).finally(() => {
                //     totalNotEmptyCellsInArray += 1;
                //     if(totalNotEmptyCellsInArray === promises.length) 
                //         return resolve(resolvedArray);
                // })

                promise
                .then(value => {
                    resolvedArray[i] = {
                        status: 'fulfilled',
                        value
                    };
                    totalNotEmptyCellsInArray += 1;
                    if(totalNotEmptyCellsInArray === promises.length) 
                        return resolve(resolvedArray);
                })
                promise.catch(reason => {
                    resolvedArray[i] = {
                        status: 'rejected',
                        reason
                    };
                    totalNotEmptyCellsInArray += 1;
                    if(totalNotEmptyCellsInArray === promises.length) 
                        return resolve(resolvedArray);
                })
            })
        } catch(err) {
            return reject(err)
        }
    }

    return new MyPromise(executor);
}

// let myPromise = new MyPromise((resolve, reject) => resolve(10));
// myPromise.then(val => console.log(val));

var res = MyPromise.allSettled([
    MyPromise.resolve(33),
    new MyPromise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    MyPromise.reject(new Error("an error")),
  ]).then((values) => {
    console.log(values)
    });
console.log(res);

// var res = MyPromise.all([
//     MyPromise.resolve(33),
//     new MyPromise((resolve) => setTimeout(() => resolve(66), 0)),
//     // MyPromise.reject(new Error("an error")),
//   ]).then((values) => {
//     console.log(values)
//     });
// console.log(res);

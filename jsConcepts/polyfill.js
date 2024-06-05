// Array.prototype.myMap = function(callback) {
//     var arr = this; // the context of the array on which this myMap function is invoked.
//     var arrayToBeReturned = [];
//     for(i=0; i<arr.length; i++) {
//         arrayToBeReturned.push(callback(arr[i], i))
//     }
//     return arrayToBeReturned;
// }
// const callback = (v,i) => {
//     return v+3;
// }


// var x = [1,3,5];
// var y = x.myMap(callback);
// var z = x.map((v,i) => {
//     return v+3             // This is a callback function, which if provided with v, and i as arguments returns v+3;
// })
// console.log(y);



////////////////////////////////////////////////     ARRAY.REDUCE     ////////////////////////////////////////////////
// var callback = (reducedVal, v) => {
//     return reducedVal + v;
// }
// Array.prototype.myReduce = () => {

// }
// var x = [8,3,4];
// var initial = 7;
// var y = x.reduce((reducedVal, v) => {
//     console.log(reducedVal, v);
//     return reducedVal - v;
// }, initial)
// console.log(y);

////////////////////////////////////////////////     PROMISE.ALL     ////////////////////////////////////////////////
// function promisify(fn, hasCallback=true){
//   //For console logging, you can use console.log() function.
//   return function(...args) {
//     if(!hasCallback) {
//       return new Promise(async (resolve,reject) => {
//         const result = await(fn(args[1], args[2]));
//         resolve(result);
//     })
//     }
//   }
// }

// const func = (a,b) =>  a+b;
// const promiseFunc = promisify(func);
// promiseFunc(2,3).then((res) => {
//     console.log(res);
// });


// function asyncGetLocal (data) {
//   debugger;
//   return new Promise((resolve, reject) => {
//     try{
//       var x = localStorage.gettem(data);
//       resolve(x);
//     } catch(err) {
//       if(err) reject(err);
//     }
//   });

//   //////////////////////////  THIS IS ALSO CORRECT WAY TO RESOLVE AND REJECT  /////////////////////////////
//   // try{
//   //   var x = localStorage.gettem(data);
//   //   return Promise.resolve(x);
//   // } catch(err) {
//   //   if(err) return Promise.reject(err);
//   // }
// }

// asyncGetLocal('name').then(
//     (successRes) => {
//       console.log(successRes)
//     },
//     (errorRes) => {
//       console.log(errorRes)
//     },
//   )
// // asyncGetLocal('name').then(res => {
// //   console.log(res)
// // }).catch(err => {
// //   console.log(err);
// // })





function cityWeather(city) {
  if (!(typeof city === 'string' || city instanceof String)) {
    throw new Error('not a string');
  } else if(city.length === 0) throw new Error('string is empty');
  // Use console.log within the cityWeather function for debugging.
  // Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.




  fetch('https://example.com/data/2.5/weather?units=metric&q=madrid').then(res=> {
    debugger;
    return res.json()
  }).then(a => {
    debugger;
    console.log(a);
  })
  // return new Promise((resolve, reject) => {
  //   // Implement the function - call http request
  //   resolve(object_to_be_returned);
  //   // Implement the function
  // });
}

try{
  cityWeather('madrid');
} catch(err) {
  console.log(err);
}
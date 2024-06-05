// write a function that takes a function and returs a curried function for it.

function add(a,b,c) {
    return a+b+c;
}

// we should be able to call the curried version of add like so :   curriedAdd(a)(b)(c)  or even curriedAdd(a)(b)(c)(d)(e) and so on

// const curry = function(func) {
//     const argsExpected = func.length;
//     if()
// }


function curryFunction(func) {
    return function curriedFunction(...args) {
        console.log('\n\nargs = ', args);
        if (args.length >= func.length) {
            return func.call(this, ...args);
        }
        return function (..._args) {
            return curriedFunction.call(this, ...args, ..._args);
        }
    }
}

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

const curriedAdd = curryFunction(add);
let sum = curriedAdd(1)(2)(3);
console.log(sum);
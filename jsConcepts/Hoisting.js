// // Declarations made with the let and const keywords are also subject to hoisting 
// // (i.e. they are moved to the top of their respective scope (global or block)) 
// // but are said to be in a temporal dead zone (TDZ) 
// // meaning that any attempt to access them will result in a reference error.

// console.log(b);
// var b = 10;
// console.log(b)

// ------------------------------------------------- //
// ************************************************* //
// global scope
let bar = 41;
console.log(bar); // 41

if (true) { // block scope
 console.log(bar); // ReferenceError (not 41) <-- PROOF OF THE HOISTING / TDZ
 let bar = 42;
 console.log(bar); // 42
}

console.log(bar); // 41

// ------------------------------------------------- //
a(); // a() is executing  *** ==>  since the entire declaration was hoisted / lifted
function a(){
    console.log('a() is executing');
}


// ------------------------------------------------- //
a(); // TypeError: a is not a function ==> since var a was hoisted (i.e only the declaration and not the value i.e the function here) with a = undefined
        // so we know a is something, but what exactly we don't know
var a = function(){
    console.log('a() is executing');
}


// ------------------------------------------------- //
a(); // ReferenceError: Cannot access 'a' before initialization  --> since let a was hoisted without any initialized value
let a = function(){
    console.log('a() is executing');
}
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //

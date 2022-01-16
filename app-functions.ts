function add(n1: number, n2:number): number {
    return n1 + n2;
}

function printResult1(num: number): void { // this function doesnt have a return statement. If you set the type as undefinied, Typescript would expect you to return, but return nothing.
    console.log('Result: ' + num);
}

printResult1(add(5,12))

function addAndHAndle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// the advantage of this callback function because it will know the callback is checked and the value expected to be a number.

// let combineValues: Function; // we want to be clear it holds a function so that it cannot be changed later
let combineValues: (a: number, b: number) => number; // takes a function that combines any values and creates a number. The arrow function part here defines the type as function, and the output of the function should be number. If using print result here, Typescript will complain.

combineValues = add;
// combineValues = 5; this will show as an error if trying to change it from a function.
//combineValues = printResult1; // will display 8 as it is a function but calling the wrong function.

console.log(combineValues(8,8));

// let someValue: undefinied

addAndHAndle(10, 20, (result) => {console.log(result)}); //this is passing in an anonymous function and then doing something with the result. Outputting 30.




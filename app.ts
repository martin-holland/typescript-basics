function add(n1: number, n2:number): number {
    return n1 + n2;
}

function printResult(num: number): void { // this function doesnt have a return statement. If you set the type as undefinied, Typescript would expect you to return, but return nothing.
    console.log('Result: ' + num);
}

printResult(add(5,12))

// let someValue: undefinied,
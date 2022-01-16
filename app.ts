let userInput: unknown; // used when a user inputs something. Better than 'any'
let userName: string; 

userInput = 5;
userInput = 'Max';
// Demonstrates the unknown like any type.
// unknown type checks what type was assigned before it.

if (typeof userInput === "string") {
    userName = userInput;
}

// userName = userInput; // not assignable due to userInput = 5 if you use type any, the problem goes away.

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {} // also a never return but is an infinite loop
}

// const result = generateError('An error occurred!', 500); // this demonstrates that the console never shows a return because the return type is in fact never. This is a much clearer approach for coding.
generateError('An error occurred!', 500);




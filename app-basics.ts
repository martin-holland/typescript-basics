console.log('Your code goes here...');

function sum(num1:number, num2:number, showResult:boolean, phrase:string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
    return result
}

const printResult = true; //boolean
const resultPhrase = "Result is:" // string

const num1 = 14;
const num2 = 4.5;
const result = sum(num1, num2, printResult, resultPhrase)
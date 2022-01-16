type Combinable = number | string; // declaring the union type in advance to be reused.
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor)  { //union type this can prevent any other value.
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
    // the above code is better because it allows the casting if one parameter is missing.
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString(); 
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)
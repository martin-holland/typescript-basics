const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "James",
    age: 34,
    hobbies: ["sports", "cooking", "reading", "writing"],
    role: [2, 'author']
}

person.role.push('admin');
// person.role[1] = 10;

let favouriteActivites: string[];
favouriteActivites = ["writing"]

console.log(favouriteActivites)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) Can see how Typescript understands.
}
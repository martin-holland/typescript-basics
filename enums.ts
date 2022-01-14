enum Role {ADMIN = 5, READ_ONLY, AUTHOR} //by assigning a number it doesnt restrict the starting number

const person = {
    name: "James",
    age: 34,
    hobbies: ["sports", "cooking", "reading", "writing"],
    role: Role.ADMIN
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
} else {
    if (person.role === Role.ADMIN) {
        console.log('is admin')
    }
}
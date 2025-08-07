const person = {
    name: 'JH',
    age: 22,
    phone: '01077777777'
};

// ❌ Bad Code 💩
/*
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}
*/

// ✅ Good Code 👍
function displayPerson(person) {
    const { name, age } = person; // person 반복X, 자동 할당.
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}
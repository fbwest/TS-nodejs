export function runObjects(): void {
    let person: { name: string, age?: number };
    person = {name: 'Kevin', age: 39};
    person = {name: 'John'};
    console.log(person);

    type person = { name: string, age: number };

    function getDefaultUser(): person {
        return {name: 'Tom', age: 27};
    }

    function printUser(user: person) {
        console.log(`Name: ${user.name}, age: ${user.age}`)
    }

    let user0 = getDefaultUser();
    printUser(user0);

// in

    type quitePerson = { name: string, age?: number }

    function printUser2(user: quitePerson) {
        if ('age' in user) {
            console.log(`name: ${user.name}, age: ${user.age}`)
        } else {
            console.log(`name: ${user.name}`)
        }
    }

    function printUser3({name, age = 24}: { name: string, age?: number }) {
        console.log(`name: ${name}, age: ${age}`)
    }

    printUser2({name: 'Jessica'});
    printUser2({name: 'Gloria', age: 19});
    printUser3({name: 'Coocoo'});
}
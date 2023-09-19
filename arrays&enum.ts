export function runArraysEnum(): void {
// array

    const people: string[] = ['Tom', 'Tim'];
    people[1] = 'Timmy';
    people.push('Trump');

    const people2: readonly string[] = [];
    const [first, second, third] = people;
    const [tom, ...rest] = people;
    console.log(first, tom, rest);

// tuples

    const person1: [string, number, boolean?] = ['Mahmud', 33];
    const person2: [string, ...number[]] = ['Jamshut', 1, 2, 3, 5, 8, 13];

// dynamic array

    function printSum(first: number, ...numArr: number[]) {
        let result = first;
        for (let num of numArr) {
            result += num;
        }
        console.log(`sum = ${result}`);
    }

    function printSum2(a: number, b: number) {
        console.log(a + b);
    }

    const args = [1, 2] as const;
    printSum(10, ...args);
    printSum2(...args);

// enum

    enum Season { Winter, Spring = 'spring', Summer = 2, Autumn}

    console.log(Season);
    console.log(Season.Winter);
}
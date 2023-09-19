export function runFunctions(): void {
    function func(a: number, b: number = 3, x?: string) {
        console.log(`${x}: ${a * b}`);
    }

    func(10, 4, 'fuck partners');

//lambda functions

    function plus(a: number, b: number): number {
        return a + b;
    }

    function mult(a: number, b: number): number {
        return a * b;
    }

    let op: (a: number, b: number) => number;

    op = plus;
    console.log(op(3, 6));
    op = mult;
    console.log(op(3, 6));

// lambda params

    type Operation = (x: number, y: number) => number;

    function op_param(a: number, b: number, oper: (x: number, y: number) => number): number {
        return oper(a, b)
    }

    function op_param_from_type(a: number, b: number, oper: Operation) {
        console.log(oper(a, b));
    }

    console.log(op_param(10, 20, plus));
    console.log(op_param(10, 20, mult));
    op_param_from_type(5, 30, mult);

// arrow functions

    const div1 = (x: number, y: number) => x / y;
    const div2 = (x, y) => x / y;
    const hello = () => "hello hell"
    const math1 = (x, y) => {
        x *= 2;
        y += 1;
        return x + y;
    }
    const exp = x => x * x;

    function math(a: number, b: number, oper: (x: number, y: number) => number): number {
        return oper(a, b);
    }

    console.log(`(x, y) => x * y = ${math(10, 20, (x, y) => x * y)}`);
    console.log(`(x, y) => x * 2 / y = ${math(15, 7, (x, y) => x * 2 / y)}`);

// union: |
    let id: number | string = '10015FF';
    id = 10015;

    function f(name: string, id: number | string) {
        console.log(`${name}'s ID is ${id}`);
    }

    f('Kevin', id);

    function showText(text: string | string[]) {
        if (typeof text === 'string') {
            console.log(text);
        } else {
            console.log(text.join(' '));
        }
    }

    showText('Is it rain begins?');
    showText(['Are', 'you', 'crazy?']);
}
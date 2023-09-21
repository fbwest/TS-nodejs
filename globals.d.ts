declare let message: string;
declare function helloPage(): void;
declare function sum(a:number, b: number): number;
declare const tom: { name: string, age: number, print: () => void };

interface IPoint {
    x: number;
    y: number;
}
declare var points: IPoint[];
declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
    display(): void;
}
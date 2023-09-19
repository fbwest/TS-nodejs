export function runOop(): void {
    abstract class Person {
        protected abstract readonly _name: string;
        protected abstract _age: number;

        public abstract get age(): number;
        public abstract set age(num: number);

        abstract print(): void;
        abstract toString(): string;
    }

    class User extends Person {
        protected readonly _name: string;
        protected _age: number;

        constructor(name: string, age: number) {
            super();
            this._name = name;
            this._age = age;
        }

        public get age() {
            return this._age;
        }

        public set age(num: number) {
            if (num >= 0 && num <= 200) {
                this._age = num;
            } else {
                console.log('Wrong age!');
            }
        }

        public print() {
            console.log(`${this._name}: ${this.age} y.o.`)
        }

        public toString(): string {
            return `name: ${this._name}, age: ${this.age}`
        }
    }

    class Admin extends User {
        constructor(name: string, age: number, private _passwd: string) {
            super(name, age);
        }

        public get passwd() {
            return this._passwd;
        }

        public print() {
            super.print();
            console.log(`admin's password: ${this._passwd}`);
        }

        public static find() {
            console.log('the admin hasn\'t been found');
        }
    }

    let user1 = new User('Johnny', 27);
    user1.print();
    user1.age = -1;
    console.log(user1.toString());
    let admin = new Admin('Anderson', 45, 'qwerty');
    admin.print();
    console.log(admin.passwd);
    Admin.find();
}
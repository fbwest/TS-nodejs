export function runDecorators() {
    function sealed(constructor: Function) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    @sealed
    class User {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        print(): void {
            console.log(this.name);
        }
    }

    //Object.defineProperty(User, 'age', { value: 17 }); -- raise error cause of the decorator

    function logger<TFunction extends Function>(trigger: TFunction): TFunction {
        let newConstructor: Function = function (name: string) {
            console.log("Creating new instance");
            this.name = name;
            this.age = 27;
            this.print = function (): void {
                console.log(`${this.name}: ${this.age}`);
            }
        }

        return <TFunction>newConstructor;
    }

    @logger
    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        print() {
            console.log(this.name);
        }
    }

    let tom = new Person("Tom");
    tom.print();
}
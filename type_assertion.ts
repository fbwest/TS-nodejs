export function runTypeAssertion(): void {
    let aVar: any;

    aVar = "I am a string";
    let theVar1 = <string>aVar;

    aVar = 12345;
    let theVar2 = aVar as number;

// classes

    class Person{
        name: string;
        constructor(personName: string) {
            this.name = personName
        }
    }

    class Employee extends Person{
        company: string;
        constructor(employeeName: string, company: string) {
            super(employeeName);
            this.company = company;
        }

        static factory(name: string): Person{
            return new Employee(name, "is undefined")
        }
    }

    function print(person: Person): void {
        console.log(`Name: ${person.name}`);
    }

    let tom: Person = new Employee("Tommy", "Google");
    print(tom);

    let jess = Employee.factory("Jessy");
    print(jess);

    console.log((<Employee>tom).company);
    console.log((tom as Employee).company);

    // interfaces

    interface IPerson{
        name: string
    }

    let jack: IPerson = new Employee("Jacky", "Amazon");
    console.log(jack);

    console.log(jess instanceof Person);
}
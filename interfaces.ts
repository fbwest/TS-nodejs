export function runInterfaces(): void {
    interface ProductDTO {
        readonly id: number;
        name: string;
        quantity: number;
        quality?: string;
        isInStock: boolean;
    }

    interface ProductDTO {
        checkStock(): void;
    }

    let product: ProductDTO = {
        id: 1,
        name: 'Skittles',
        quantity: 10,
        quality: 'good',
        isInStock: true,
        checkStock() {
            if (this.isInStock) {
                let qual: string = '';
                if (this.quality != null) {
                    qual = ` - ${this.quality} quality`;
                }
                console.log(`${this.name} in stock with amount = ${this.quantity}${qual}`);
            } else {
                console.log(`${this.name} out of stock`);
            }
        }
    }
    product.checkStock();

    class Sausages implements ProductDTO {
        readonly id: number;

        constructor(public name: string, public quantity: number, public isInStock: boolean) {
            this.id = 2;
        }

        checkStock() {
            if (this.isInStock) {
                console.log(`${this.name} in stock with amount = ${this.quantity}`);
            } else {
                console.log(`${this.name} out of stock`);
            }
        }
    }

    let dubki = new Sausages('Дубки', 25, false);
    dubki.checkStock();

// complex interfaces

    interface FullNameBuilder {
        (name: string, surname: string): string;
    }

    let getFullName: FullNameBuilder = (name, surname) => `${name} ${surname}`;
    console.log(getFullName('Tom', 'Cruse'));

    interface StringArray {
        [index: number]: string;
    }

    let phones: StringArray = ['huawei', 'iphone', 'xiaomi'];

    interface PersonBuilder {
        (name: string, surname: string): void;

        fullName: string;
        passwd: string;

        authenticate(): void;
    }

    function personBuilder(): PersonBuilder {
        let person = <PersonBuilder>function (name, surname): void {
            person.fullName = name + ' ' + surname;
        };
        person.authenticate = function () {
            if (this.passwd != null) {
                console.log(`User ${this.fullName} authorised in the system with password: ${this.passwd}`);
            } else {
                console.log(`Set password for user ${this.fullName}`);
            }
        }
        return person;
    }

    let bob1 = personBuilder();
    bob1('Bob', 'Atkins');
    bob1.authenticate();
    bob1.passwd = 'qwerty123';
    bob1.authenticate();
}
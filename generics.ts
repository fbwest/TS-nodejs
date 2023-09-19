export function runGenerics(): void{
    function getId<T>(id: T): T{
        return id;
    }

    console.log(getId<string>("JEPEDRILO!!!!!!!!!!!!!!!!!!!!!!!!"));

    function showArray<T>(args: Array<T>): string{
        return args.join(":")
    }

    console.log(showArray<number>([13, 2, 15, 7]));

    interface IUser<T>{
        getId(): T;
    }

    interface INamed{
        name: string;
    }
    class User<T> implements IUser<T>{
        private readonly id: T;
        constructor(id: T) {
            this.id = id;
        }
        public getId(): T{
            return this.id;
        }
    }

    const user: User<number> = new User<number>(227);
    console.log(`User ID: ${user.getId()}`);

    function compare<T extends INamed>(obj1: T, obj2: T): boolean{
        return obj1.name === obj2.name;
    }

    let obj1 = {name: 'tom', company: 'toyota'};
    let obj2: {name: string} = {name: 'tom'};

    console.log(compare<{name: string}>(obj1, obj2));

    function factory<T>(type: { new(): T; }): T{
        return new type();
    }

    class Meat{
        constructor() {
        }
    }

    let food= factory<Meat>(Meat);
}
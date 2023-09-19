export function runVarsTypes(): void {
    let hex: number = 0xf004;
    let bin: number = 0b101101;
    let oct: number = 0o0471;

    console.log('hex:' + hex + "/bin:" + bin + '/oct:' + oct);
    console.log(`hex:${hex}/bin:${bin}/oct:${oct}`);

    let var1: any = "any";
    var1 = 27;

    let anyArray: any[] = [24, "Tom", true];

    let var2;
    var2 = 27;
    var2 = "any";

    if (typeof var2 === "number") {
        var2 *= 3;
    }

    console.log(typeof var2);

// null | undefined

    function printId(id: number | null) {
        if (id === null) {
            console.log('Id is not found')
        } else {
            console.log(id)
        }
    }

    printId(15195);
    printId(null);

// type (&)

    type Person1 = { name: string, age: number };
    type Employee1 = Person1 & { company: string };
    const bob: Employee1 = {name: 'Bob', age: 69, company: 'Apple'};
    console.log(bob);
}
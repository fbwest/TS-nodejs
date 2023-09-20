interface IDevice {
    name: string;
}
class Phone implements IDevice {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
function call(phone: Phone) {
    console.log(`Make a call by ${phone.name}`);
}

export { IDevice, Phone as Smartphone, call }
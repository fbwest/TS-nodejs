import {runVarsTypes} from "./vars&types";
import {runFunctions} from "./functions";
import {runArraysEnum} from "./arrays&enum";
import {runObjects} from "./objects";
import {runOop} from "./OOP";
import {runInterfaces} from "./interfaces";

if (typeof window === "object") {

    let header = document.getElementById("header");
    header = <HTMLElement>document.getElementById("header");
    header = document.getElementById("header") as HTMLElement;

    header!.innerText = `Hello User!`;
}

console.log("\n   --- vars & types ---"); runVarsTypes();
console.log("\n   --- functions ---"); runFunctions();
console.log("\n   --- arrays & enums ---"); runArraysEnum();
console.log("\n   --- objects ---"); runObjects();
console.log("\n   --- OOP ---"); runOop();
console.log("\n   --- interfaces ---"); runInterfaces();

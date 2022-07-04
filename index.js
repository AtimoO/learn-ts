"use strict";
/* Общие типы
const num: number = 123; // boolean, string
const isLoader: boolean | string = true; // bool or string

const obj: { pages: number } = { // obj
  pages: 433,
}

const arrNum: number[] = [1, 3, 4]; // for array, all number
const arrStr: string[] = ["1", "2"];

// Только задные типы для каждого свой
const tuple: [number, string] = [2, "3"]; // tuple

let any: any = true; // Любой тип
 */
function getName(obj) {
    return `${obj.name} ${obj.surname}`;
}
// const getFullName = (name: string, surname: string): string => {
//   return `${name} ${surname}`
// }
const userObj = {
    name: "Name",
    surname: "Surname",
    city: "City",
    age: 24,
};
let info;
console.log(getName(userObj));

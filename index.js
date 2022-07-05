"use strict";
/* Общие типы
const num: number = 123; // boolean, string
const isLoader: boolean | string = true; // bool or string

const obj: { pages: number } = { // obj
  pages: 433,
}

const arrNum: number[] = [1, 3, 4]; // for array, all number
const arrStr: string[] = ["1", "2"];
const arr: number[][] = [[1, 11, 101], [2, 22], [3]]; // многомерный

// Только задные типы для каждого свой
const tuple: [number, string] = [2, "3"]; // tuple

let any: any = true; // Любой тип
 */
/*
function getName(obj: { name: string, surname: string }): string {
  return `${obj.name} ${obj.surname}`
}

const getFullName = (name: string, surname: string): string => {
  return `${name} ${surname}`
}

const userObj: { name: string, surname: string, city: string, age: number } = {
  name: "Name",
  surname: "Surname",
  city: "City",
  age: 24,
}

const printGreeting = (name: string): void => { // пустой
  console.log(`Hi, ${name}`);
};

//Literal Types
let position: 'absolute' | 'fixed' | 'relative' | 'static' | 'inherit';

console.log(getName(userObj));

 */
/*
const arrType: string[] = ["ASC", "DESC", "DEF"];
const arrType1: ReadonlyArray<string> = ["ASC", "DESC", "DEF"];

const rez: string[] = arrType.filter((type: string) => type !== "ASC");

const typl: [number, string] = [2, "asd"]; // pop-push работает

const arrSp: readonly [number, string, ...boolean[]] = [1, "asd", false, true];

console.log(rez);
*/

let isLoader: boolean | string = "asd";

let asd = `Hello ${isLoader}`;

const obj: { pages: number } = {
  pages: 433,
}

const arrNum: number[] = [1, 3, 4];
const arrStr: string[] = ["1", "2"];

// Только задные типы для каждого свой
const tuple: [number, string] = [2, "3"];

// Любой
let any: any = "123";

// unknown
let unk: unknown = "asd";

//Отличин между unk and any
// let news: string = any;
// let newss: string = unk;
// const doSmth = (arg: any) => {
//   arg.raveOn();
// };

// const doSmthSafe = (arg: unknown) => {
//   arg.raveOn();
// }
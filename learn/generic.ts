const a: Array<number> = [1, 2, 3, 4];

async function test() {
  const b = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false,
};

function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(1);

function getArrayHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getArrayHalf([1, "2", 3]);

const convertToString = <T>(str: T): string | undefined => {
  if (Array.isArray(str)) {
    return str.toString();
  }
  switch (typeof str) {
    case "string":
      return str;
    case "number":
    case "symbol":
    case "boolean":
    case "function":
      return str.toString();
    case "object":
      return JSON.stringify(str);
    default:
      return undefined;
  }
};

console.log(convertToString<number>(2)); // дополнительная типизация передачи
console.log(convertToString({ a: 1, b: 3 }));
console.log(convertToString([1, 3, 4]));
console.log(convertToString("asd"));

const newSplit: <T>(str: T) => string | undefined = convertToString;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

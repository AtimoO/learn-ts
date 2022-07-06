/*
 // Liteal
type httpMethod = "POST" | "GET";

// Alias
type userObj = {
  name: string;
  age: number;
};

type description = {
  description: string;
  showDescription: (description: string) => string;
};

type newTypeUser = userObj & description; // соединять только те, которые не накладываются

// Interface - в отличие от алиас, есть наследование
interface IUser {
  name: string;
  age: number;
}

interface IDescription {
  desription: string;
}

interface IUserDic {
  [index: number]: IUser;
}

// Доопределения интерфейса - и это отличие от type
interface IDescription {
  text: string;
}

interface INewUser extends IUser, IDescription {}

const obj: IUser = {
  name: "asd",
  age: 24,
};

function fetchWithAuth(url: string, method: httpMethod): void {
  console.log(`${url}`);
}

const method = "POST";

fetchWithAuth("test", method);

*/

interface IUser {
  login: string;
  password?: string; // опциональность (т.е. не обязательность)
}

const userObj: IUser = {
  login: "asd@asd",
  password: "****",
};

const multiply = (first: number = 5, second?: number): number => {
  if (!second) {
    return first * first;
  }
  return first * second;
};

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }
/*
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  success = "success",
  failed = "failed",
}

interface IRequestPayment extends IPayment {}

interface IDataSuccess extends IRequestPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.failed;
  data: IDataFailed;
}

type voidFuc = () => void;

const fVoid: voidFuc = () => {
  return false;
};

const skills = ["Dev", "DevOps"];

const user = {
  s: [""],
};

skills.map((skill) => user.s.push(skill));
*/

// unknow
type Ttype =  {
  name: string;
};

let input: unknown;
input = 3;
input = [false, true];

async function getData() {
  try {
    fetch("");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

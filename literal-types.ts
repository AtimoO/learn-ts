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

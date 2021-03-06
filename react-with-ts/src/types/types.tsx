export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface IConfig {
  baseUrl: string;
  headers: {
    "Content-Type": string;
  };
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

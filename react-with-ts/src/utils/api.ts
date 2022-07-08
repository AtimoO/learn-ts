import { ITodo, IUser } from "../types/types";
import { config } from "./constants";

const checkResponse = (response: any): Promise<any> => {
  return response.ok
    ? response.json()
    : response.json().then((err: any) => Promise.reject(err));
};

export const getUsers = async (): Promise<IUser[]> => {
  return await fetch(`${config.baseUrl}/users`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

export const getUser = async (id: string): Promise<IUser> => {
  return await fetch(`${config.baseUrl}/users/${id}`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

export const getTodos = async (): Promise<ITodo[]> =>  {
  return await fetch(`${config.baseUrl}/todos?_limit=10`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

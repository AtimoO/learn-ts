import { IUser } from "../types/types";
import { config } from "./constants";

const checkResponse = (response: any) => {
  return response.ok
    ? response.json()
    : response.json().then((err: any) => Promise.reject(err));
};

export const getUsers = async (): Promise<IUser[]> => {
  return  await fetch(`${config.baseUrl}/users`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

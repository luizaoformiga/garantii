import { AxiosResponse } from "axios";
import { api } from "./axios";

export const getuser = api
  .get("/")
  .then((response) => response.data)
  .catch((error: Error) => error);

export const postUser = (name: string, email: string, password: string) => {
  const response = api
    .post("/")
    .then((response) => response.data)
    .catch((error: Error) => error);
  return response;
};

export const fetchUser = async (
  name: string,
  email: string
): Promise<AxiosResponse<any, any>> => {
  const response = await api
    .get("/users/:id")
    .then((response) => response.data)
    .catch((error: Error) => error);
  return response;
};

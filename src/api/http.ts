import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { CustomError } from "../interfaces/CustomError";

axios.defaults.baseURL = "https://coffee-shop-data.vercel.app/";

export function get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  return axios
    .get(url, config)
    .then((response: AxiosResponse<T>) => response.data)
    .catch((error: CustomError | Error) => {
      if (axios.isAxiosError(error)) {
        console.log("Axios error:", error.message);
      } else {
        console.log("Other error:", error.message);
      }
      throw error;
    });
}

export function post<T>(url: string, data: string, config: AxiosRequestConfig = {}): Promise<T> {
  return axios
    .post(url, data, config)
    .then((response: AxiosResponse<T>) => response.data)
    .catch((error: CustomError | Error) => {
      if (axios.isAxiosError(error)) {
        console.log("Axios error:", error.message);
      } else {
        console.log("Other error:", error.message);
      }
      throw error;
    });
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 1500,
};
const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((res) => res.data);
    }
    async post(url: string, body: object): Promise<AxiosResponse> {
        return instance.post(url, body).then((res) => res.data);
    }
    async patch(url: string, body: object): Promise<AxiosResponse> {
        return instance.patch(url, body).then((res) => res.data);
    }
    async put(url: string, body: object): Promise<AxiosResponse> {
        return instance.put(url, body).then((res) => res.data);
    }
    async delete(url: string): Promise<AxiosResponse> {
        return instance.delete(url).then((res) => res.data);
    }
}

const httpRequest = new Request();

export default httpRequest;

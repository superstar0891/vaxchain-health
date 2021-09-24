import { v4 } from "uuid";
import axios from "axios"
import store from "setup/redux/Store";

// let BASE_URL;

// if (process.env.NODE_ENV === "development") {
//     BASE_URL = "http://localhost:9000";
// }
// if (process.env.NODE_ENV === "production") {
//     BASE_URL = "http://119.45.0.151:9000";
// }

const {
    auth: { accessToken }
} = store.getState();
console.log("setupAxios", accessToken);

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        // 'X-Api-Key': idToken,
    },
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
    (config: any) => {
        console.log("setupAxios1", accessToken);
        if (accessToken) {
            config.headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Correlation-Id': v4()
            }
        }

        return config;
    },
    (err: any) => Promise.reject(err)
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
    (response: any) => {
        if (response.status === 200) {
            if (response.data.code === 200) {
                return Promise.resolve(response.data);
            } else {
                return Promise.resolve(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    async (error: any) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            // const accessToken = await refreshAccessToken();
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json",
    },
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        "ACCESS_TOKEN"
    )}`;
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }
        throw error;
    }
);
export default axiosClient;

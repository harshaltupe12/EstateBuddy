import axios from "axios";
import { useContext } from "react";

const apiRequest = axios.create({
    baseURL: "http://localhost:8800/api",
    withCredentials: true,
})


export default apiRequest;
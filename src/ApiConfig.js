import axios from "axios";

const Base_Url = "http://localhost:5454";

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: Base_Url,  // Specify the base URL here
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
});

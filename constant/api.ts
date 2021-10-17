import axios from "axios";

export const API = axios.create({
    baseURL: "https://us-central1-silicon-airlock-153323.cloudfunctions.net/",
    timeout: 30000
})
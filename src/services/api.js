import axios from "axios";

const api = axios.create({
    baseURL: "https://fakerapi.it/api/v1/books?_quantity=20"
});

export default api;
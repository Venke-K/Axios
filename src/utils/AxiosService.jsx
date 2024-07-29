import axios from "axios";

const AxiosService = axios.create ({
    baseURL: 'https://669e9d609a1bda36800723d8.mockapi.io',
    headers: {
        "Content-Type ": "application/json"
    }
})

export default AxiosService
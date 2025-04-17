import axios from "axios";

const api=axios.create({
    baseURL:'https://openlibrary.org/search.json',
    timeout:1000,
})

export default api;
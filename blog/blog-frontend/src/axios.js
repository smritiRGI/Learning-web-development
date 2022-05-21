import axios from 'axios';

// axios.create - used to create new instances of axios
// reusable for multiple requests
const instance = axios.create({
    baseURL : "http://localhost:8000/api/articles",
});

export default instance;
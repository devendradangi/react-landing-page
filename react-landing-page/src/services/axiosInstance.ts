import axios from 'axios';

const axiosInstanceForDummyJSON = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstanceForDummyJSON;


import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-udemy-1daf6.firebaseio.com/'
});

export default instance;
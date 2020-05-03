import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-aa67e.firebaseio.com/'
});

export default instance;
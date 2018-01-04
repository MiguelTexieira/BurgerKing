import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-e50c1.firebaseio.com/'
});

export default instance;
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodServices.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getFood;

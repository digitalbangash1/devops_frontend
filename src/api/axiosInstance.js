import axios from 'axios';

export default axios.create({
    baseURL: 'https://backend-webshop.admin.samat.diplomportal.dk/' ,
    //baseURL: 'https://localhost:7181',
    timeout: 10000
});
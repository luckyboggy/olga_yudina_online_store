import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode";


const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.jsonWebToken);
    console.log(data.jsonWebToken)
    return jwt_decode(data.jsonWebToken);
}

const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    window.localStorage.setItem('token', data.jsonWebToken);
    return jwt_decode(data.jsonWebToken);
}

const check = async () => {
    console.log('proverka2')
    const { data } = await $authHost.get('api/user/auth');
    console.log(123)
    window.localStorage.setItem('token', data.jsonWebToken);

    return jwt_decode(data.jsonWebToken);



}






export { registration, login, check }
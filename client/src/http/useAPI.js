import { $authhost, $host } from "./index.js";

const registration = async (email, password) => {
    const response = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    return response;
}

const login = async (email, password) => {
    const response = await $host.post('api/user/login', { email, password });
    return response;
}

const check = async () => {
    const response = await $host.post('api/auth/registration');
    return response;
}

export { registration, login, check }
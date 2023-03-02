import { $authHost, $host } from "./index.js";
//import jwt_decode from "jwt-decode"


//Категории
const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
}

const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
}

const deleteType = async (id) => {
    const { data } = await $authHost.delete(`api/type/${id}`);
    //return data;
    window.localStorage.setItem("jsonWebToken", data.jsonWebToken);
    return data.jsonWebToken;
}

//Товары
const createProduct = async (type) => {
    const { data } = await $authHost.post('api/product', type);
    return data;
}

const fetchProducts = async () => {
    const { data } = await $host.get('api/product');
    return data;
}

const fetchOneProduct = async (id) => {
    const { data } = await $host.get(`api/product/${id}`);
    return data;
}

export { createType, fetchTypes, deleteType, createProduct, fetchProducts, fetchOneProduct }
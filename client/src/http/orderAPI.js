import { $authHost, $host } from "../shared/api/index.js";

const getOrdersByUser = async (userId) => {
    const { data } = await $authHost.get('api/order', {
        params: { userId },
    });
    return data;
}

export { getOrdersByUser };
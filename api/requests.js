import {$api} from "./config";

export const fetchProperties = async () => {
    try {
        const res = await $api.get('/properties');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

import {$api} from "./config";

export const fetchProperties = async () => {
    return $api.get('/properties');
}

export const fetchProperty = async (propertyId) => {
    return $api.get(`/properties/${propertyId}`)
}

export const fetchPropertiesSearch = async ({location, propertyType}) => {
    return $api.get(`/properties/search?location=${location}&propertyType=${propertyType}`)
}

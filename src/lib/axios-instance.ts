import axios, { AxiosResponse } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps';
import { API_BASE_URL } from './constants';

const pokemonApi = axios.create({
    baseURL: API_BASE_URL
})

// Axios middleware to convert all api responses to camelCase
pokemonApi.interceptors.response.use((response: AxiosResponse) => {
    if (
        response.data &&
        response.headers['content-type'] === 'application/json; charset=utf-8'
    ) {
        response.data = camelizeKeys(response.data)
    }

    return response
});

// Axios middleware to convert all api requests to snake_case
pokemonApi.interceptors.request.use((config) => {
    const newConfig = { ...config };
    newConfig.url = `api/v2/${config.url}`;

    if (newConfig.headers !== undefined) {
        if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
            return newConfig
        }
    }

    if (config.params) {
        newConfig.params = decamelizeKeys(config.params)
    }

    if (config.data) {
        newConfig.data = decamelizeKeys(config.data)
    }

    return newConfig

})

export { pokemonApi }

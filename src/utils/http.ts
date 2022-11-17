import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8000',
})

export const getQueryString = (params: any) => {
    let query = params;

    return Object
        .keys(query)
        .map(key => {
            if (query[key] === undefined || query[key] === null || query[key] === '')
                return ''
            
            return key + '=' + query[key]
        })
        .join('&');
}
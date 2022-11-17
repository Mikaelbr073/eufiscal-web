import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8000',
})

export const httpGoogleMaps = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api',
})
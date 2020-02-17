import axios from 'axios';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const MAKE_TRANSACTION = 'MAKE_TRANSACTION';
export const FETCH_OVERVIEW = 'FETCH_OVERVIEW';

const BASE_URL = 'http://localhost:8080/api';

export function getOverview() {
    const url = `${BASE_URL}/overview`;

    const response = axios.get(url);
    return {
        type: FETCH_OVERVIEW,
        payload: response,
    }
}

export function makeTransaction(data) {
    const url = `${BASE_URL}/overview`;

    const response = axios.post(url, data);
    return {
        payload: response,
        type: MAKE_TRANSACTION
    }
}
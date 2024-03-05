import {jwtDecode} from 'jwt-decode';
import apiUrl from '../config';

export const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return false;
    }

    try {
        const { exp } = jwtDecode(token);
        if (exp < new Date().getTime() / 1000) {
            return false;
        }
    } catch {
        return false;
    }

    return true;
};

export const refreshToken = async () => {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) {
        return false;
    }

    try {
        const response = await fetch(apiUrl + 'token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { access } = await response.json();
        localStorage.setItem('accessToken', access);
        return true;
    } catch {
        return false;
    }
};
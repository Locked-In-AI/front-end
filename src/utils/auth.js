import {jwtDecode} from 'jwt-decode';
import apiUrl from '../config';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const isAuthenticated = () => {
    const token = getCookie('accessToken');
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
    const refresh = getCookie('refreshToken');
    if (!refresh) {
        return false;
    }

    try {
        const response = await fetch(apiUrl + '/token/refresh/', {
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
        document.cookie = `accessToken=${access}; path=/`; // Save new access token in cookie
        return true;
    } catch {
        return false;
    }
};

export const getAccessToken = async () => {
    if (isAuthenticated()) {
        return getCookie('accessToken');
    }

    const refreshed = await refreshToken();
    if (refreshed) {
        return getCookie('accessToken');
    }
    //TODO: Redirect to login page
    return null;
};
import apiUrl from "../config";

const confirmAuthentication = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;

    const response = await fetch(`${apiUrl}token/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return response.ok ? (await response.json()).isValid : false;
};

const isAuthenticated = () => !!localStorage.getItem('accessToken');

export {confirmAuthentication, isAuthenticated}
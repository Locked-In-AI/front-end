import apiUrl from "./config";
import { getAccessToken } from "./utils/auth";

const accessTokenPromise = getAccessToken(); // Fetch access token once

async function fetchFromApi(endpoint, method = 'GET', body = null) {
    const accessToken = await accessTokenPromise;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    };

    const options = {
        method,
        headers
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${apiUrl}${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    return response.json();
}

const optimizeDescription = async (description) => {
    const response = await fetchFromApi('/optimize/', 'POST', { "description":description });

    return response;
};

const fetchCv = async (id) => {
    const data = await fetchFromApi(`/cv/${id}`);

    return data;
};

const fetchCvs = async () => {
    const data = await fetchFromApi('/cv/');

    return data;
};

const putCv = async (cv) => {
    const success = await fetchFromApi(`/cv/${cv.id}/`, 'PUT', cv);

    return success;
};

const fetchJobApplications = async () => {
    const data = await fetchFromApi('/application/job-application/');

    return data;
};

const pushJobApplications = async (jobApplication) => {
    const data = await fetchFromApi('/application/job-application/', 'POST', jobApplication);

    return data;
};

export { optimizeDescription, fetchCv, fetchCvs, putCv, fetchJobApplications, pushJobApplications };

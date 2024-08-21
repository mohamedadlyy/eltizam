import axios from 'axios';

/**
 * Make an API call with Axios.
 * @param {string} url - The endpoint URL.
 * @param {string} method - The HTTP method (GET, POST, etc.).
 * @param {object} data - The request payload for POST/PUT requests.
 * @param {object} headers - Optional headers.
 * @returns {Promise<object>} - The API response containing both data and status.
 */
const apiCall = async (url, method, data = null, headers = {}) => {
    try {
        const options = {
            url,
            method,
            headers,
            data
        };

        const response = await axios(options);
        return {
            data: response.data,
            status: response.status, // Include the status code in the response
        };
    } catch (error) {

        const status = error.response ? error.response.status : null;

        // Pass the error object along with the status code to handle it in the calling function
        throw { ...error, status };

    }
};

/**
 * Handle API errors.
 * @param {object} error - The error object.
 */
const handleError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code outside of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
};

export default apiCall;

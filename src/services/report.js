import { apiClient } from "./config";
import axios from 'axios';


export const apiAddReport = async (formData) => {
    const response = await apiClient.post('/users/report', formData, {
        // timeout: 10000, // Set a timeout for requests
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};



export const apiSubmitReport = async (formData) => {
    const token = localStorage.getItem('token'); 

    if (!token) {
        throw new Error('Authentication token is missing');
    }

    try {
        const response = await apiClient.post('/agents/report', formData, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; 
    } catch (error) {
        console.error("Error submitting report:", error);
        throw error; r
    }
};

export const apiGetAgencyReports = async () => apiClient.get ('/agents/reports')

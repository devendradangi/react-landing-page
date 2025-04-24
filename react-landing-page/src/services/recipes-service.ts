import axiosInstanceForDummyJSON from './axiosInstance';

export const fetchDataByDummyJSON = async (endpoint: string, params = {}) => {
    try {
        const response = await axiosInstanceForDummyJSON.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const fetchDataByDummyJSONById = async (endpoint: string) => {
    try {
        const response = await axiosInstanceForDummyJSON.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API GET by ID failed:', error);
        throw error;
    }
};

export const addDataByDummyJSON = async (endpoint: string, data = {}) => {
    try {
        const response = await axiosInstanceForDummyJSON.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('API POST failed:', error);
        throw error;
    }
};

export const updateDataByDummyJSON = async (endpoint: string, data = {}) => {
    try {
        const response = await axiosInstanceForDummyJSON.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('API UPDATE failed:', error);
        throw error;
    }
};

export const deleteDataByDummyJSON = async (endpoint: string) => {
    try {
        const response = await axiosInstanceForDummyJSON.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('API DELETE failed:', error);
        throw error;
    }
};
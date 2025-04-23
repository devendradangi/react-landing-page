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
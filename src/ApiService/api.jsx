import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"; // Replace with your actual API base URL

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export const getAllProductId = async (id) => {
 
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    
}

export const getProductImage = async (id) => {
 
        const response = await axios.get(`${BASE_URL}/products/${id}/image`);
        return response.data;
    
}
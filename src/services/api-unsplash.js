import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "GaWayrn3MYE1n_06QbF5vOh6w4mPvpMmsn6kAIDOUWw";

export const fetchImages = async (query, page) => {
    
        const response = await axios.get(`/search/photos?client_id=${API_KEY}`, {
            params: {
            query: query,
            orientation: 'landscape',
            page: page,
            per_page: 16,
            },
});
return response.data;        
};
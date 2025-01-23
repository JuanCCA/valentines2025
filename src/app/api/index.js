

const API_KEY = "34NXceGVw2v1jGngMT0Wtp1OYxf64LKY";
const SEARCH_QUERY = "funny cats"
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&q=${SEARCH_QUERY}&limit=8`;

export const getGifs = async () => {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.error("Error obteniendo GIFs: ", error)
        return [];
    }
}
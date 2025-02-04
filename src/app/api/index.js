

const API_KEY = "34NXceGVw2v1jGngMT0Wtp1OYxf64LKY";
const SEARCH_QUERY = "funny cats"
const OFFSET = Math.floor(Math.random() * 150)
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(SEARCH_QUERY)}&offset=${OFFSET}&limit=8`;
const scoreGifAPI = (score) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(score)}&limit=1`;
console.log(OFFSET)
console.log(API_URL)
export const getGifs = async () => {
    try {
        const response = await fetch(API_URL);
        const {data} = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo GIFs: ", error)
        return [];
    }
}

export const getScoreGif = async (score = 0) => {
    try {
        const response = await fetch(scoreGifAPI(score));
        const {data} = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo GIFs: ", error)
        return [];
    }
}
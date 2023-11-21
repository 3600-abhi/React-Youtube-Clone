import axios from "axios";
import { ServerConfig } from "../config";

async function getVideos() {
    try {
        const response = await axios.get(ServerConfig.YOUTUBE_VIDEOS_API + ServerConfig.GOOGLE_API_KEY);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getSearchSuggestions(text) {
    try {
        const response = await axios.get(ServerConfig.YOUTUBE_SUGGESTIONS_API + `&q=${text}&format=5&alt=json`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getVideos,
    getSearchSuggestions
};
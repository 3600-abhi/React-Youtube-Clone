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

export default {
    getVideos
};
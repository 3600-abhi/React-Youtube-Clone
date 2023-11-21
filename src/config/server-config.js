import dotenv from "dotenv";

dotenv.config();

export default {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    YOUTUBE_VIDEOS_API: process.env.YOUTUBE_VIDEOS_API,
    YOUTUBE_SUGGESTIONS_API: process.env.YOUTUBE_SUGGESTIONS_API
};
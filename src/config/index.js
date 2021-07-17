require('dotenv').config();

const config = {
    ENVIRONMENT= process.env.NODE_ENV,
    YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
};

export default config;
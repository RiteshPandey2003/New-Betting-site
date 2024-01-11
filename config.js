var config = {
    apiKey: process.env.API_KEY || ""
};

// Use this if your code is running on a platform that supports process.env
if (typeof process !== 'undefined' && process.env) {
    config.apiKey = process.env.API_KEY || "";
}
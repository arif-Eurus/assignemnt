//comment part was for development

/*
const API_URL = "http://127.0.0.1:8000/api/";
const API_MEDIA_URL = "http://127.0.0.1:8000";
*/
require('dotenv').config()

//below part is for production
const API_URL = process.env.REACT_APP_API_URL;
const API_MEDIA_URL = process.env.REACT_APP_API_MEDIA_URL;
console.warn(process.env)
export default API_URL;
export {API_MEDIA_URL};


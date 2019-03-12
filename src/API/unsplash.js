//ALL the code related to Axios or relating to network Request 

import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
})
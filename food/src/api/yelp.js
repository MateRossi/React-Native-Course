import axios from "axios";


export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer idOfmxtBamS8DUW1tRkktIZg0kyOz7ZRjcZsJdD9BeonRrPsPczlWYDjaE6fFtegOYCU3g2MyY4g_xnltEXw_PXxa3wH3rjk2Zv3f9bFSmMBVLgEtJpQXZJrk2kXZHYx'
    }
});

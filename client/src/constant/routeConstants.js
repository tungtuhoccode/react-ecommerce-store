const API_URL = {
    MAIN: process.env.REACT_APP_API_URL,
    FEATURED_PRODUCT: process.env.REACT_APP_API_URL +"/products/trending",
    SINGLE_PRODUCT: process.env.REACT_APP_API_URL +"/products",
    GENDER_CATAGORY: process.env.REACT_APP_API_URL +"/products",
    
}


export default API_URL;
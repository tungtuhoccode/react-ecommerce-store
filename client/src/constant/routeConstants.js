// const API_URL = {
//     MAIN: process.env.REACT_APP_API_URL,
//     FEATURED_PRODUCT: process.env.REACT_APP_API_URL +"/products/trending",
//     SINGLE_PRODUCT: process.env.REACT_APP_API_URL +"/products",
//     GENDER_CATAGORY: process.env.REACT_APP_API_URL +"/products",
    
// }

const MAIN_API_URL = `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`

const API_URL = {
    MAIN: MAIN_API_URL,
    // FEATURED_PRODUCT: "http://"+window.location.hostname+":4000" +"/products/trending",
    FEATURED_PRODUCT: `${MAIN_API_URL}/products/trending`,
    // SINGLE_PRODUCT: "http://"+window.location.hostname+":4000" +"/products",
    SINGLE_PRODUCT: `${MAIN_API_URL}/products`,
    GENDER_CATEGORY: `${MAIN_API_URL}/products`,

    
}

export default API_URL;
//***DEPLOYMENT***
// const MAIN_API_URL = "https://"+process.env.REACT_APP_API_URL

//development only
const MAIN_API_URL = `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`
// const MAIN_API_URL = `http://${window.location.hostname}`

const API_URL = {
    MAIN: MAIN_API_URL,
    FEATURED_PRODUCT: `${MAIN_API_URL}/products/trending`,
    // FEATURED_PRODUCT: MAIN_API_URL+"/products/trending",
    TRENDING_PRODUCT: MAIN_API_URL+"/products/featured",
    SINGLE_PRODUCT: `${MAIN_API_URL}/products`,
    GENDER_CATEGORY: `${MAIN_API_URL}/products`,
    LOGIN:`${MAIN_API_URL}/auth/login`,
    REGISTER:`${MAIN_API_URL}/auth/register`,
    LOGOUT:`${MAIN_API_URL}/auth/logout`,
}

export default API_URL;
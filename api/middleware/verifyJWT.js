const jwt = require('jsonwebtoken')
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret  = process.env.REFRESH_TOKEN_SECRET

const verifyRefreshToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
}
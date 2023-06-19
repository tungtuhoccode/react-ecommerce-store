const User = require('../model/userSchema');



//bcrypt is used to store hashed passwords to keep it safe in the database
const bcrypt = require('bcrypt');

//jwt: session controller
const jwt = require('jsonwebtoken')
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret  = process.env.REFRESH_TOKEN_SECRET

const handleUserRegistration = async (req, res, next) => {
    const {email, password} = req.body

    if (!email ) {
        return res.status(400).json({
            "isSuccess":false,
            "message":"missing email"
        })
    }

    if (!password ) {
        return res.status(400).json({
            "isSuccess":false,
            "message":"missing password"
        })
    }

    //check for duplicate email in the database
    try{
        const isDuplicate = await User.isDuplicateEmail(email)
        if (isDuplicate){
            return res.status(409).json({
                "isSuccess":false,
                "message":"Email already exists"
                
            }) //code 409 is for conflict
        }
    }
    catch(err){
        return res.status(500).json({"message":"error finding in database"})
    }

   //register new user 
    try{
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10) //10 salt round is the default standard

        //store the user
        const newUser = await User.create({
            "email": email,
            "password": hashedPassword
        });

        return res.status(201).json({
            "isSuccess":true,
            "message:":"Sduccessfully registered",
            "user": newUser
        })
       
    }
    catch(err){
       console.log(err)
    }

    console.log(req.body.email)
    console.log(req.body.password)

    res.json("busy handling user registeration!")
}

const handleUserLogIn = async (req, res, next) => {
    const {email, password} = req.body

    console.log(req.body)

    if (!email ) {
        return res.status(400).json({"message":"missing email"})
    }

    if (!password ) {
        return res.status(400).json({"message":"missing password"})
    }

    //password comparison
    try{
        const user = await User.findOne({
            "email": email,
        })
    
        //user not found
        if(!user){
            return res.status(401).json({"message":"Incorrect email and password"}) //Unauthorized
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        
        if (!isPasswordMatch){
            return res.status(401).json({"message":"Incorrect email and password"})
        }

        if (isPasswordMatch){
            //create refresh JWT for user and store it in the database
            //if the user already have a refresh token, send that refresh token to the browser
            const accessToken = jwt.sign(
                {"email":user.email},
                accessTokenSecret,
                {expiresIn: '5h'}
            )
            const refreshToken = jwt.sign(
                {"email":user.email},
                refreshTokenSecret,
                {expiresIn: '365d'}
            )


            //addRefreshToken to the database
            await User.addRefreshToken(email, refreshToken)

            const userAfter = await User.findOne({
                "email": email,
            })

            //send information back to browser
            res.cookie('jwtRefreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 365 * 24 * 60 * 60 * 1000 });
            res.cookie('jwtAccessToken', accessToken, { sameSite: 'None', secure: true, maxAge: 3 * 60 * 60 * 1000 });

            return  res.json({
                "isLoggedIn": true,
                "accessToken": accessToken,
                "message":"Sign in successfully",
                "user": userAfter
            })
            
        }

    }
    catch(err){
        console.log("error in user sign in", err.message)
    }



    res.status(400).json({"message":"Something went wrong"})
  
}

//TODO: handle log out
const handleLogout = async (req,res, next) => {
    const refreshToken = req.cookies.jwtRefreshToken
    const accessToken = req.cookies.jwtAccessToken

    const allCookies = req.cookies
    console.log(allCookies)

    if (!refreshToken){
        return res.status(404).json({"message:":"Token does not exist. Can't log out"})
    }
    
    let tokenEmail 
    jwt.verify(refreshToken, refreshTokenSecret, (err, decodedToken) => {
        if(err){
            console.log(err.message)
            return res.status(404).json({"message:":"Token is not valid. Can't log out"})
        }
        tokenEmail = decodedToken.email

    } )
    console.log(tokenEmail)
    //find the refresh token in the database
    try{
        const user = await User.findOne({ email: tokenEmail})
        
        user.refreshToken = user.refreshToken.filter(token => token != refreshToken) //remove the current refresh token from database

        await user.save()
    }
    catch(err){
        return res.status(404).json({"message:":"Error in getting user. Can't log out"})
    }
    res.json("logged out")
}



module.exports = {
    handleUserRegistration,
    handleUserLogIn,
    handleLogout
};
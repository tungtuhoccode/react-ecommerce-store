const express = require('express')
const User = require('../../model/userSchema');
const router = express.Router();

const {
    handleUserRegistration,
    handleUserLogIn,
    handleLogout
} = require('../../controllers/userAuthController');

router.route('/register').post(handleUserRegistration)

router.route('/login').post(handleUserLogIn)

router.route('/logout').post(handleLogout)


//for testing purposes only
router.route('/testDeleteUser').delete(async function (req,res){
    try{
        await User.deleteMany();
    }

    catch(err){
        res.json("error",err.message)
    }

    res.json("successfully deleted")
})

router.route('/getAllUser').get(async function (req,res){
    try{
        const user = await User.find();
        return res.json(user)
    }

    catch(err){
        return res.json("error",err.message)

    }
    res.json("something went wrong")
})

module.exports = router;
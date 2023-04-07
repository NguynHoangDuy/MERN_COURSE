const express = require("express")
const router = express.Router()
const User = require("../../models/User")
const auth = require("../../middleware/auth")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")
const bcrypt = require("bcryptjs")
// @route   GET api/auth
//@desc     Test route
//acess     Public
router.get("/", auth,async (req, res)=> {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {   
        console.error(error.mesage)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/auth
//@desc     Authenticate user & get token
//acess     Public


router.post("/", [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
], async (req, res) => {
    const err = validationResult(req)
    
    if(!err.isEmpty()){
        return res.status(400).json({err: err.array()})
    }
    const { email, password} = req.body;
    try {
        //See if user exists
        let user = await User.findOne({
            email
        })
        if(!user){
            return res.status(400).json({err: [{msg: "Invalid Credentials"}]})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({err: [{msg: "Invalid Credential"}]})
        }
        const payload = {
           user: {
            id : user.id
           }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token)=>{
            if(err) throw err
            res.json({ token })
        })
    } catch (error) {
        console.log(error)
        console.error(error.mesage)
        res.status(500).send("Server error")
    }
   
})

module.exports = router
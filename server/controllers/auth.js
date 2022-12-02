import bcrypt from 'bcrypt'
import User from "../models/User.js"

export const register = async(req, res) =>{
    try {
        const { 
            firstname, 
            lastname,
            email,
            password, 
            friends, 
            picturePath,
            location,
            occupation
        } = req.body
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstname,
            lastname,
            email,
            password:passwordHash,
            friends,
            location,
            occupation,
            picturePath,
            viewedProfile:Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async(req,res,next) => {
    const {email, password} = req.body; //get from front end, all post data available in req.body

    try {
        const existingUser = await User.findOne({email}); //search for exisitng user

        if(!existingUser) return res.status(404).json({message: 'user doesn\'t exist'});
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordValid) return res.status(404).json({message: 'Invalid Credentials'});

        //if user exists and password is valid, get json web token to send to front end
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'secret', {expiresIn: '1h'});
        res.status(200).json({result: existingUser, token});
    
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const signup = async(req,res,next) => {
    const {email,password,confirmPassword,firstName,lastName} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({message: 'User already exists'})

        if(password !== confirmPassword) return res.status(400).json({message: 'password doesn\'t match'})

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})
    
        const token = jwt.sign({email: result.email, id: result._id}, 'secret', {expiresIn: '1h'});
        res.status(200).json({result, token});


    } catch (error) {
        res.status(500).json({message: error})

    }
}
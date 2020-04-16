const UserService = require('../service/userService')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const Model = require('../models/user')
const bcrypt = require('bcryptjs')

class UserController {
    static async reqisterUser(req, res) {
        try {
            const { name, email, password, phone } = req.body
            if(!name || !email || !password || !phone) {
                return res.status(400).json({
                    message: 'Please fill in empty fields'
                })
            }
            else {
                const hash = bcrypt.hashSync(password, 10)
                const info = await Model.create(req.body)
                info.password = hash
                await info.save()
                return res.status(201).json({
                    message: 'Registration was successful',
                    info: info
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async userEmail(req, res) {
        try {
            if (!req.body.email || !req.body.password) {
                return res.status(403).json({message:`please fill all fields and login`})
            }
            else {
                const info = await Model.findOne({email:req.body.email})
                if(!info){
                    return res.status(400).json({message:`no user with such email`})
                }
                else{
                    const passwordIsValid = await bcrypt.compareSync(req.body.password, info.password)
                    if(!passwordIsValid){
                        return res.status(403).json({message:`Wrong password`})
                    }
                    else{
                        const token = await jwt.sign({id:info.id, name:info.name, email:info.email}, process.env.USER_SECRET, {expiresIn:'24h'})
                
                        return res.status(200).json({
                            message:`successful`,
                            token:token
                            
                        })
                    }
                }
            
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async userPassword(req, res) {
        try {
            const { password } = req.body
            if(!password) {
                return res.status(400).json({
                    message: 'Please fill in empty fields'
                })
            }
            else {
                const info = await UserService.userPassword(password)
                if(!info) {
                    return res.status(404).json({
                        message: 'Error'
                    })
                }
                else {
                    info.password = null
                    await info.save()
                    return res.status(200).json({
                        message: 'success',
                        info: info
                    })
                }
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = UserController;

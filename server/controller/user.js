const UserService = require('../service/userService')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

class UserController {
    static async reqisterUser(req, res) {
        try {
            const { name, email } = req.body
            if(!name || !email) {
                return res.status(400).json({
                    message: 'Please fill in empty fields'
                })
            }
            else {
                const info = await UserService.registerUser(req.body)
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
            const { email } = req.body
            if(!email) {
                return res.status(400).json({
                    message: 'Please fill in empty fields'
                })
            }
            else {
                const info = await UserService.userEmail(email)
                if(!info) {
                    return res.status(404).json({
                        message: 'No record of user found'
                    })
                }
                else {
                    const newPassword = await UserService.genratePassword()
                    info.password = newPassword
                    await info.save()
                    console.log(info)
                    // const mail = await UserService.sendMail(nodemailer, email, newPassword)
                    // if (!mail){
                    //     return res.status(400).json({
                    //         message: `Error unable to send email`
                    //     })
                    // }
                    // else {
                    //     return res.status(200).json({
                    //         message: 'success',
                    //         info: info
                    //     })
                    // }
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

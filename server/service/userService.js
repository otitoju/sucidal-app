const Model = require('../models/user')

class UserService {
    static async registerUser(data) {
        try {
            return await Model.create(data)
        } catch (e) {
            throw e
        }
    }

    static async userEmail(email) {
        try {
            return await Model.findOne({ email: email })
        } catch (e) {
            throw e
        }   
    }

    static async userPassword(password) {
        try {
            return await Model.findOne({ password: password })
        } catch (e) {
            throw e
        } 
    }

    static async tokenGenerator(jwt, user, secret) {
        try {
            const token = await jwt.sign({ id: user.id, name: user.name, email: user.email }, secret)
            return token
        } catch (e) {
            throw e
        } 
    }

    static async getUsers() {
        try {
            return await Model.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        } 
    }

    static async getUser(id) {
        try {
            return await Model.findOne({ _id: id })
        } catch (e) {
            throw e
        } 
    }

    static async genratePassword() {
        try {
            var digits = '0123456789abcdefghijklmnopqrstuvwxyz@#$&'; 
            let PASSWORD = ''; 
            for (let i = 0; i < 8; i++ ) { 
                PASSWORD += digits[Math.floor(Math.random() * 10)]; 
            } 
            return PASSWORD; 
        } catch (e) {
            throw e
        }
    }

    static async sendMail(nodemailer, email, password) {
        try {
            const transport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.GMAILUSER,
                    pass: process.env.GMAILPW
                }
            })
            const mailOptions = {
                from: process.env.GMAILUSER,
                to: email,
                subject:'Passwordless account',
                html: '<p>Your requested password is '+
                    password +'</p>'
            }
            const mailsent = await transport.sendMail(mailOptions)
            if (!mailsent) {
                return null
            }
            else {
                return mailsent
            }
        } catch (e) {
            throw e
        }
    }
}

module.exports = UserService;

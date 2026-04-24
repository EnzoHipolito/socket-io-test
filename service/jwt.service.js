const jwt = require('jsonwebtoken')
const SECRET_KEY = "chave_secretaaaa"

function generateToken(payload){
    return jwt.sign(payload, SECRET_KEY, {expiresIn: '3h'})
}

function verifyToken(token){
    return jwt.verify(token, SECRET_KEY)
}

module.exports = { generateToken, verifyToken }
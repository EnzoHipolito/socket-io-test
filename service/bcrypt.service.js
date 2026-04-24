const bcrypt = require('bcrypt')

function generateHash(password) {
    return bcrypt.hash(password, 10)
}

function compareHash(password, hash) {
    return bcrypt.compare(password, hash)
}

module.exports = { generateHash, compareHash }
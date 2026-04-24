const Usuario = require('../models/Usuario')
const { generateToken, verifyToken } = require('../service/jwt.service')
const { generateHash, compareHash } = require('../service/bcrypt.service')

const registrar = async (req, res) => {
    const {valores} = req.body

    const passwordCript = generateHash(valores.password)

    try{
        await Usuario.create({
            id: valores.id,
            username: valores.username,
            password: passwordCript
        })
        res.status(200).json({message: 'Sucesso ao criar o usuario'})
    }
    catch(err){
        console.error('Erro ao realizar o login do usuario', err)
        res.status(500).json({message: 'Erro no servidor'})
    }
}

const login = async (req, res) => {
    const {valores} = req.body

    try{
        const usuario = await Usuario.findOne({where: valores.username})
        const passwordC = compareHash(valores.password, usuario.password)
    }
    catch(err){
        console.error('Erro ao realizar o login do usuario', err)
        res.status(500).json({message: 'Erro no servidor'})
    }
}

const listar = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll({raw: true})
        res.status(200).json({usuario})
    }
    catch(err){
        console.error('Erro ao realizar o login do usuario', err)
        res.status(500).json({message: 'Erro no servidor'})
    }
}

module.exports = {registrar, login, listar}
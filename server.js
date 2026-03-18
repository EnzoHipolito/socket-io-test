const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)
const io = new Server(server)
const jwt = require('jsonwebtoken')
const db = require('./config/db')
const PORT = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

io.on('connection', (socket) => {
    console.log(`Usuario conectado!, id: ${socket.id}`)

    socket.on('userConnect', (dados) => {
        socket.broadcast.emit('userConnect', dados)
    })

    socket.on('userClick', (dados) => {
        io.emit('userClick', dados)
    })

    socket.on('disconnect', () => {
        console.log(`Usuario desconectado!, id: ${socket.id}`)
        io.emit('userDisconnect', 'Usuario se desconectou')
    })
})

server.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)
const io = new Server(server)
const db = require('./db/conn')
const PORT = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// Rotas HTTP



// Socket.IO
const users = {}

io.on('connection', (socket) => {
    console.log(`Usuario conectado!, id: ${socket.id}`)

    setTimeout(() => {
        io.emit('onlineCount', io.sockets.sockets.size)
    }, 100)

    socket.on('userConnect', (dados) => {
        users[socket.id] = dados || {}
        socket.broadcast.emit('userConnect', dados)
    })

    socket.on('userClick', (dados) => {
        if (dados && dados.username) {
            users[socket.id] = { ...users[socket.id], username: dados.username }
        }
        io.emit('userClick', dados)
    })

    socket.on('disconnect', () => {
        console.log(`Usuario desconectado!, id: ${socket.id}`)
        const user = users[socket.id]
        const username = user?.username || 'Alguém'
        delete users[socket.id]
        io.emit('userDisconnect', username)
        io.emit('onlineCount', io.sockets.sockets.size)
    })
})

db.sync()
.then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})
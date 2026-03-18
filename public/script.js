const socket = io()
const teste = document.getElementById('teste')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const username = document.getElementById('username').value
    socket.emit('userClick', `${username} Clicou o botão!`)
})

socket.on('userClick', (dados) => {
    teste.innerHTML += `${dados} <br>`
})

socket.on('connect', () => {
    socket.emit('userConnect', `alguem se conectou!`)
})

socket.on('userConnect', (dados) => {
    console.log(dados)
    teste.innerHTML += `${dados} <br>`
})

socket.on('userDisconnect', (dados) => {
    console.log(dados)
    teste.innerHTML += `${dados} <br>`
})
const socket = io()

const messagesDiv = document.getElementById('teste')
const btn = document.getElementById('btn')
const statusDot = document.getElementById('status-dot')
const statusText = document.getElementById('status-text')
const onlineCountEl = document.getElementById('online-count')

function getTime() {
    const now = new Date()
    return `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
}

function removeWelcome() {
    const welcome = messagesDiv.querySelector('.welcome-message')
    if (welcome) welcome.remove()
}

function addMessage(username, text, type = 'other') {
    removeWelcome()

    if (type === 'system') {
        const div = document.createElement('div')
        div.className = 'system-message'
        div.textContent = text
        messagesDiv.appendChild(div)
    } else {
        const messageDiv = document.createElement('div')
        messageDiv.className = `message ${type}`

        const authorDiv = document.createElement('div')
        authorDiv.className = 'message-author'
        authorDiv.textContent = type === 'own' ? 'Você' : (username || 'Anônimo')

        const bubbleDiv = document.createElement('div')
        bubbleDiv.className = 'message-bubble'
        bubbleDiv.textContent = text

        const timeDiv = document.createElement('div')
        timeDiv.className = 'message-time'
        timeDiv.textContent = getTime()

        messageDiv.appendChild(authorDiv)
        messageDiv.appendChild(bubbleDiv)
        messageDiv.appendChild(timeDiv)
        messagesDiv.appendChild(messageDiv)
    }

    messagesDiv.scrollTop = messagesDiv.scrollHeight
}

function sendMessage() {
    const mensagemInput = document.getElementById('mensagem')
    const usernameInput = document.getElementById('username')
    const text = mensagemInput.value.trim()
    const username = usernameInput.value.trim() || 'Anônimo'

    if (!text) return

    socket.emit('userClick', { text, username, socketId: socket.id })
    mensagemInput.value = ''
    mensagemInput.focus()
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage()
})

btn.addEventListener('click', sendMessage)

socket.on('connect', () => {
    statusDot.classList.add('connected')
    statusText.textContent = 'Conectado'
    socket.emit('userConnect', { socketId: socket.id })
})

socket.on('disconnect', () => {
    statusDot.classList.remove('connected')
    statusText.textContent = 'Desconectado'
})

socket.on('userClick', (dados) => {
    const isOwn = dados.socketId === socket.id
    addMessage(dados.username, dados.text, isOwn ? 'own' : 'other')
})

socket.on('userConnect', () => {
    addMessage(null, 'Um usuário entrou no chat 👋', 'system')
})

socket.on('userDisconnect', (username) => {
    addMessage(null, `${username || 'Um usuário'} saiu do chat`, 'system')
})

socket.on('onlineCount', (count) => {
    onlineCountEl.textContent = count
})
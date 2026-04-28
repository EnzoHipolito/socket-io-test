const btn = document.getElementById('auth-btn')

btn.addEventListener('click', async (e) => {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (!username || !password) {
        return alert('Preencha todos os campos!')
    }

    try {
        const resposta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })

        const data = await resposta.json()

        if (resposta.ok) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', username)
            alert('Logado com sucesso!')
            window.location.href = '/public/index.html'
        } else {
            alert(data.message)
        }
    } catch (err) {
        console.error('Erro:', err)
        alert('Erro ao conectar com o servidor')
    }
})
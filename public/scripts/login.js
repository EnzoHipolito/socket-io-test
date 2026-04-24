const form = document.getElementById('auth-form')

form.addEventListener('submit', (e) => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    if (!username || !password){
        return alert('Preencha todos os campos!')   
    }

    
})
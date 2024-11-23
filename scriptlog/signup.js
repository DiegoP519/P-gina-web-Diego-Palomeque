const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    let Users
    try {
        Users = JSON.parse(localStorage.getItem('users')) || []
    } catch (error) {
        Users = []
    }

    const isUserRegistered = Users.find(user => user.email === email)
    if (isUserRegistered) {
        return alert('Parece que ya te has registrado')
    }

    Users.push({ name: name, lastname: lastname, email: email, password: password })
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Felicidades! Ya estás registrado')
    window.location.href = 'login.html'
})

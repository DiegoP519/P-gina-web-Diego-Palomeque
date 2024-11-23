const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name')
    const email=document.querySelector('#email')
    const password= document.querySelector('#password')

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = users.find(user => user.email)
})
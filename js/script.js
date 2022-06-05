let email = document.getElementById('email'); //input do email
let password = document.getElementById('password'); //input do password
let inputs = document.querySelectorAll('.input') //os dois inputs em uma variável  

inputs.forEach((inputs) => inputs.addEventListener('input', handleChange)) //verificar alteração dos inputs

function handleChange() { //remover e adicionar disabled do botão de login
    let btnLogin = document.querySelector('.btn-login');
    if (email.value && password.value.length >= 8) {
        btnLogin.removeAttribute('disabled');
    } else {
        btnLogin.setAttribute('disabled', '');
    }
}




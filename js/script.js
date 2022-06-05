let email = document.getElementById('email');
let password = document.getElementById('password');
let emailValidation = document.getElementById('emailValidation');
let passwordlValidation = document.getElementById('passwordValidation');

function login() {
    if (email.value == ""){
        emailValidation.classList.remove('hiden')

    } if (password.value == "" && password.value < 8){
        passwordValidation.classList.remove('hiden')
    }
}
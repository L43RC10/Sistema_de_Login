/*let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let btn = document.querySelector('#btn');

console.log(email.value+pass.value);

btn.addEventListener('click', e => {
    if(email.value == "admin@admin.com" && pass.value == "admin"){
        alert('Logado!');
        localStorage.setItem("acesso", true);

        window.location.href = "index.html";
    } else {
        alert('Usuário ou senha inválidos!');
    }
});*/

function logar(){
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');

    console.log(email.value+pass.value);

    if(email.value == "admin@admin.com" && pass.value == "admin"){
        alert('Logado!');
        localStorage.setItem("acesso", true);

        window.location.assign("index.html");
    } else {
        alert("Usuário ou senha inválidos!");
    }
}
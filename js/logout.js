document.querySelector('#btnSalir').addEventListener('click', salir);

function salir(){
    sessionStorage.setItem('validador', false);
    window.location.href= 'login.html';
}
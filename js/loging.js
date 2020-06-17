document.querySelector('#btnIngresar').addEventListener('click', iniciar);

function iniciar(){
    var acceso = false;
    var usr = "";
    var pss = "";

    usr = document.getElementById('USER').value;
    pss = document.getElementById('PASS').value;

    acceso = validarUsers(usr, pss);

    console.log(acceso);

    if(acceso){
        sessionStorage.setItem('validador', acceso);
        window.location.href= 'insumos.html';
    }
}
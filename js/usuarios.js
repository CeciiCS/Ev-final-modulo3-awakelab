function obtenerUsers() {
    var usuariosList = JSON.parse(localStorage.getItem('usuariosListLs'));
    if (usuariosList == null) {
        usuariosList = [
            //Nombre, Apellido, Usuario, Contraseña
            ['Ignacio', 'Millanao', 'ign', '123'],
            ['Peter', 'Parker', 'spider', '123']
        ]
    }
    return usuariosList;
}

function validarUsers(pUser, pPass) {
    var listaUsers = obtenerUsers();
    var acceso = false;

    for (var i = 0; i < listaUsers.length; i++) {
        if (pUser == listaUsers[i][2] && pPass == listaUsers[i][3]) {
            acceso = true;
            sessionStorage.setItem('usuarioLogeado', listaUsers[i][0] + ' ' + listaUsers[i][1]);
        }
    }
    return acceso;
}
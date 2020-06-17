console.log(sessionStorage.getItem('validador'));
    if (sessionStorage.getItem('validador') == 'true') {
        console.log('Noice')
    }else{
        window.location.href = 'login.html';
    }
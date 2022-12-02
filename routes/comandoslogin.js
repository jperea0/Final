const btnL = document.getElementById("enviaL");
btnL.addEventListener('click', () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = {
        username: username,
        password: password
    }
    fetch('http://localhost:3000/api/login/', {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
            if (resultado.message == "Logged in") {
                let exito = document.getElementById("aviso");
                exito.innerHTML = "Logged in"
                setTimeout(pagina(), 8000)
            }
            if (resultado.message == "username or password incorrect") {
                let aviso = document.getElementById("aviso");
                aviso.innerHTML = "username or password incorrect"
            }
            if (resultado.message == "Username or Password is incorrect") {
                let aviso = document.getElementById("aviso");
                aviso.innerHTML = "Username or Password is incorrect"
            }
        })

});

function pagina() {
    window.location.replace("../paginasInicio/paginasDentro/home.html")
}
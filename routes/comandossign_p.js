const btnS = document.getElementById("envioS");
btnS.addEventListener('click', () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password_repeat = document.getElementById("password_repeat").value;
    let result = {
        username: username,
        password: password,
        password_repeat: password_repeat
    }
    fetch('http://localhost:3000/api/sign-up/', {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
            if (resultado.message == "registered") {
                let exito = document.getElementById("exito");
                exito.innerHTML = "registered"
                setTimeout(ingreso(), 8000);
            }
            if (resultado.message == "This username is alredy used") {
                let fallo = document.getElementById("fallo");
                fallo.innerHTML = "This username is alredy used"
            }
            if (resultado.msg == "Both passwords must match") {
                let fallo = document.getElementById("fallo");
                fallo.innerHTML = "Both passwords must match"
            }
            if (resultado.msg == "Please enter a password with min. 6 chars") {
                let fallo = document.getElementById("fallo");
                fallo.innerHTML = "Please enter a password with min. 6 chars"
            }
            if (resultado.msg == "Please enter a username with min. 3 chars") {
                let fallo = document.getElementById("fallo");
                fallo.innerHTML = "Please enter a username with min. 3 chars"
            }
        })
});

function ingreso() {
    window.location.replace("./login.html")
}
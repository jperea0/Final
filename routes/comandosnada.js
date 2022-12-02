const btn = document.getElementById('muestra');
btn.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('edad').value;
    let activo = document.getElementById('activo').value;
    let dependientes = document.getElementById('numd').value
    let depende = [];
    for (let i = 1; i <= dependientes; i++) {
        let nombre = document.getElementById(`nombre${i}`).value
        let cantidad = document.getElementById(`edad${i}`).value
        depende.push({ nombre: nombre, cantidad: cantidad });
    }
    let result = {
        nombre: nombre,
        celular: celular,
        email: email,
        edad: edad,
        activo: activo,
        dependientes: depende
    }
    console.log(result);
    fetch('http://localhost:3000/api/contactos/', {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
            if (resultado.message == "Registros añadidos con exito") {
                let aviso = document.getElementById("input");
                aviso.innerHTML = "Registros añadidos con exito"
            }
        })
})

const btnDep = document.getElementById('dependio');
btnDep.addEventListener('click', () => {
    let dependientes = document.getElementById('numd').value
    let input = document.getElementById('input')
    for (let i = 1; i <= dependientes; i++) {
        input.innerHTML += `
    <label>${i}</label>
    <input type="text" id="nombre${i}" name="nombre" placeholder="nombre"><input type="number" id="edad${i}" name="edad" placeholder="Cantidad" required><button onclick="eliminar(this)">Eliminar</button><br>
    `
    }
});

const eliminar = (e) => {
    const div2 = e.parentNode;
    input.removeChild(div2);
    actualizarContador();
};

const actualizarContador = () => {
    let divs = input.children;
    contador = 1;
    for (let i = 0; i < divs.length; i++) {
        divs[i].children[0].innerHTML = contador++;
    }
};
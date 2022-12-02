const btnE = document.getElementById('borrar');
btnE.addEventListener('click', () => {
    let id = document.getElementById('delete').value;
    let nombre = document.getElementById('deleteN').value
    let result = {
        id: id,
        nombre: nombre
    }
    console.log(result);
    fetch('http://localhost:3000/api/contactos/' + id, {
            method: 'DELETE',
            body: JSON.stringify(result),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
            if (resultado.message == "Registros eliminados") {
                let aviso = document.getElementById("input");
                aviso.innerHTML = "Registros eliminados"
            }
        })
});
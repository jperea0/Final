const btnFF = document.getElementById('muestra');
btnFF.addEventListener('click', () => {
    let nombreC = document.getElementById('nombre').value;
    let nombreV = document.getElementById('celular').value;
    let productos = document.getElementById('email').value;
    let cantidad = document.getElementById('edad').value;
    let costo = document.getElementById('activo').value;
    let result = {
        nombreC: nombreC,
        nombreV: nombreV,
        productos: productos,
        cantidad: cantidad,
        costo: costo
    }
    console.log(result);
    fetch('http://localhost:3000/api/factura/', {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
        })
});
const btnF = document.getElementById('factura');
btnF.addEventListener('click', () => {
    let id = document.getElementById('delete').value;
    let result = {
        id: id,
    }
    console.log(result);
    fetch('http://localhost:3000/api/factura/', {
            method: 'GET',
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
const mysql = require('../db')

module.exports = {
    crear: (req, res) => {
        let cadSql = `INSERT INTO factura (cliente,vendedor,fecha,total) values 
        ('${req.body.nombreC}',${req.body.nombreV},'now()',${req.body.productos})`;
        mysql.query(cadSql, (err, results, fields) => {
            if (err) {
                console.log(err)
            } else {
                mysql.query(`INSERT INTO defactura (id_producto,cantidad,costo) values ('${req.body.productos}', ${req.body.cantidad}, ${req.body.costo})`, (err, results, fields) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(results);
                    }
                })
            }
        })
    },


    eliminar: (req, res) => {
        //delete
        mysql.query('DELETE from defacturas WHERE id_factura=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                mysql.query('DELETE from factura WHERE cliente=?', req.body.name, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json('Registros eliminados');
                    }
                })
            }
        });
    },


    listar: (req, res) => {
        //get
        mysql.query('SELECT * from defacturas', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log(results)
                mysql.query('SELECT * from facturas', req.body, (error, results, fields) => {
                    if (error) {
                        res.json(error)
                    } else {
                        res.json(results)
                    }
                });
            }
        });
    },


    buscar: (req, res) => {
        mysql.query('SELECT * from defacturas WHERE id_factura=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
            }
        });
    }
}
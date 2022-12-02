const mysql = require('../db')

module.exports = {
    crear: (req, res) => {
        //post
        /*mysql.query('INSERT INTO contacto SET ?', req.body, (err, results, fields) => {
            if (err) {
                res.json(err);
            } else {
                console.log(results);
                res.json(results);
            }
        });*/
        console.log(req.body)
        let cadSql = `INSERT INTO clientes (nombre,celular,email,edad,activo) values 
        ('${req.body.nombre}',${req.body.celular},'${req.body.email}',${req.body.edad},${req.body.activo})`;
        mysql.query(cadSql, (err, results, fields) => {
            if (err) {
                console.log(err)
                    //res.json(err);
            } else {
                console.log(req.body.dependientes.length)
                for (let i = 0; i < req.body.dependientes.length; i++) {
                    mysql.query(`INSERT INTO productos (nombre,cantidad,cliente_id) values ('${req.body.dependientes[i].nombre}', ${req.body.dependientes[i].cantidad}, ${req.body.nombre})`, (err, results, fields) => {
                        console.log(req.body.dependientes)
                        if (err) {
                            //  res.json(err);
                            console.log(err)
                        } else {
                            res.json({ message: 'Registros añadidos con exito' });
                        }
                    })
                }
                // res.json({ msg: 'holsssss' });
            }
        })
    },


    eliminar: (req, res) => {
        //delete
        mysql.query('DELETE from clientes WHERE id=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                mysql.query('DELETE from productos WHERE clientes=?', req.body.id, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        console.log('Registros eliminados');
                        mysql.query('DELETE from factura WHERE cliente=?', req.body.nombre, (error, results, fields) => {
                            if (error) {
                                res.json(error);
                            } else {
                                mysql.query('DELETE from defactura WHERE id_factura=?', req.body.id, (error, results, fields) => {
                                    if (error) {
                                        res.json(error);
                                    } else {
                                        res.json({ message: 'Registros eliminados' });
                                    }
                                })
                            }
                        });
                    }
                })
            }
        });
    },


    listar: (req, res) => {
        //get
        mysql.query('SELECT * from clientes', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
                mysql.query('SELECT * from productos', req.body, (error, results, fields) => {
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
        //get/.id
        mysql.query('SELECT * from clientes WHERE id=?', req.params.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
                mysql.query('SELECT * from productos WHERE clientes=?', req.params.id, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        console.log(results)
                        res.json(results);
                    }
                });
            }
        });
    }
}
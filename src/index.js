//Rodar aplicação: npm run dev
const express = require('express');
var mysql = require('../mysql').pool;

//Criar o app
const app = express();

//Aplicar midlewares
app.use(express.json());

//CREATE
app.post('/new', (req, res) => {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send ({error: error }) }
       conn.query(
           'INSERT INTO persons (FirstName, Family, ActorBirth, Died ) VALUES (?,?,?,?)',
           [req.body.FirstName, req.body.Family, req.body.ActorBirth, req.body.Died],
           (error, resultado, field) => {
               conn.release();
               if(error) { return res.status(500).send ({error: error }) }
                res.status(201).send({
                    mensagem: 'Personagem inserido com sucesso',
                    PersonId: resultado.insertId
                })
            }
            ) 
      
    })
});

//READ
app.get('/list', (req, res) => {
    mysql.getConnection((error, conn) => {
     conn.query(
         'SELECT * FROM persons;',
         (error, resultado, field) => {
          if(error) { return res.status(500).send ({error: error }) }
          return res.status(200).send({response: resultado})
         }
     )
    })
 });

 //READ
 app.get('/:PersonID', (req, res) => {
    mysql.getConnection((error, conn) => {
     conn.query(
         'SELECT * FROM persons WHERE PersonID = ?;',
         (req.params.PersonID),
         (error, resultado, field) => {
          if(error) { return res.status(500).send ({error: error }) }
          return res.status(200).send({response: resultado})
         }
     )
    })
 });


 //UPDATE
 app.patch('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send ({error: error }) }
       conn.query(
            `UPDATE persons
                SET FirstName = ?,
                Family = ?,
                ActorBirth = ?, 
                Died = ?
            WHERE PersonID = ?`,
          [req.body.FirstName, req.body.Family, req.body.ActorBirth, req.body.Died, req.body.PersonID],
           (error, resultado, field) => {
               conn.release();
               if(error) { return res.status(500).send({error: error }) }
                res.status(202).send({
                    mensagem: 'Personagem atualizado com sucesso',
                })
            }
            ) 
      
    })
});

//DELETE 
app.delete('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send ({error: error }) }
       conn.query(
            'DELETE FROM persons WHERE PersonID = ?',
           [req.body.PersonID],
           (error, resultado, field) => {
               conn.release();
               if(error) { return res.status(500).send({error: error }) }
                res.status(202).send({
                    mensagem: 'Personagem removido com sucesso',
                })
            }
            ) 
      
    })
});

//Mandar o servidor rodar
app.listen(3501,() => console.log('Server ir running' ))


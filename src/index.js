//Rodar aplicação: npm run dev

const express = require('express');
const mysql = require('mysql');
var connection = require("../mysql");

//Fake database

//Criar o app
const app = express();

//Aplicar midlewares
app.use(express.json());

app.post('/new', (req, res) => {

    connection.getConnection((error, conn) => {
       conn.query(
           'INSERT INTO persons (FirstName, Family, ActorBirth, Died ) VALUES (?,?,?,?)',
           [req.body.FirstName, req.body.Family, req.body.ActorBirth, req.body.Died],
           (error, resultado, field) => {
               conn.release();
               if(error) {
                   return res.status(500).send({
                       error: error,
                       response: null
                    });
                }
                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    PersonId: resultado.insertId
                })
            }
            ) 
      
    })
});

app.get('/list', (req, res) => {
    const allBooks = books
    return res.status(200).json(allBooks)
});

app.get("/list/:book_id" , (req, res) => {
    const {book_id} = req.params 
    const book = books.find((book) => book.id === book_id);
    if(!book) res.status(404).json('not found');
    return res.status(200).json(book);
});

app.delete('/list/:book_id' , (req, res) => {
    const {book_id} = req.params 
    const filteredBooks = books.filter(book => book.id !== book_id); 
    books = filteredBooks
    return res.status(204).json(books);
});

app.patch('/list/:book_id' , (req,res) => {
    const {author, title, piblishAt} = req.body
    const {book_id} = req.params
    const book = books.find(book => book.id === book_id)
    book.id = book.id
    book.title = title ? title : book.title
    book.author = author ? author : book.author
    book.piblishAt = piblishAt ? piblishAt : book.piblishAt
    return res.status(200).json(book)
})

//Mandar o servidor rodar
app.listen(3501,() => console.log('server ir running'))


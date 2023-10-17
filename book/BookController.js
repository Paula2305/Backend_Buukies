const express = require('express');
const app = express();

// app.use(express.urlencoded({extended: true}));
// app.use(express.json);

let Book = require('/Book');

app.post('/create', (req,res) =>{
    Book.create({
        titulo : req.body.name,
        precio : req.body.precio
    });
});






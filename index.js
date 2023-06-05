

// Importerer dependencies
import express from 'express';
import { postRouter } from './Routes/post.router.js';




// Deklarerer app var med ekspress objekt
// const express = require('express');
const app = express();




app.get("/", (req, res) => {
     res.send('Hej verden!');
});

app.get('/about', (req, res) => {
      res.send('Dette er about siden...');
})

app.get('/contact', (req, res) => {
      res.send('Dette er kontakt siden...');
});

app.listen(4242, () => {
      console.log("Express server kører....");
});


app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
});


// app.get("/", (req, res) => {
//     res.send('Hej verden!');
// });

// app.listen(4242, () => {
//     console.log("Express server kører på http://localhost:4242");
// });


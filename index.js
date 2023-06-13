

// Importerer dependencies
import express from 'express';
import { productsRouter } from './Express_Frame/products.router.js';
import { aboutRouter } from './Express_Frame/about.router.js';
// import { postRouter } from './Routes/post.router.js';

// Importerer og sætter dotenv til globale vars
import dotenv from 'dotenv';

import db from './Config/db.config.js';

// db.query(`SELECT title FROM song`, (err, result) => {
//     console.log(err);
//     console.log(result);
// })

dotenv.config();

// console.log(process.env.PORT);
// Kald variabler på process.env
const port = process.env.PORT;
const api_key = process.env.APIKEY;

// Deklarerer app var med ekspress objekt
// const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true}))


app.get("/", (req, res) => {
     res.send('Hej verden!');
});

app.get("/get", (req, res) => {
      db.query(
          `SELECT title, content, name
           FROM song
           JOIN artist
           ON artist.id = song.artist_id
           `
           , (err, result) => {
              if(err){
                  res.send(err)
              }
              if(result){
                  res.send(result)
              }
           })
  });


// Anvender eksterne routes
app.use(productsRouter)
app.use(aboutRouter)



// Skriver fejl hvis route ikke findes
app.use((req, res, next) => {
      res.status(404).send("Siden blev ikke fundet")
});


// app.listen(4444, () => {
//       // console.log("Express server kører....");
//       console.log("Express server kører på http://localhost:4444");
// });


// Aktiverer server og lytter på port fra .env fil
app.listen(process.env.PORT, () => {
      console.log(`Server kører på //http://localhost:${process.env.PORT}`);
  })
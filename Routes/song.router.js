

import express from 'express'
import songController from '../Controllers/song.controller.js'


// Deklarerer var til router
const songRouter = express.Router()

// Deklarerer klasse instans
const song = new songController()


// Route med GET method - henter
songRouter.get('/song', (req, res) => {
    // Get parametre hentes på request objektets query property
    // console.log(req.body);

    // console.log(song.list());

    return song.list(req, res)
})


// Route med GET method - henter detaljer
songRouter.get('/song/:id([0-9]*)', (req, res) => {
    // console.log(song.details());
    // console.log(req.params.id);

    return song.details(req, res)
})


// Route med POST method - opretter
songRouter.post('/song', (req, res) => {
    // console.log(song.create());

    return song.create(req, res)
})


// Route med PUT method - opdaterer
songRouter.put('/song', (req, res) => {
    // console.log(song.update());

    return song.update(res, req)
})



// Route med DELETE method - Sletter
songRouter.delete('/song/:id', (req, res) => {
    // console.log(song.delete());

    return song.delete(res, req)
})




export { songRouter }
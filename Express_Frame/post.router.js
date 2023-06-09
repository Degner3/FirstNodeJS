
// Importerer dependencies
import express from 'express'
import songController from '../Controllers/song.controller.js';




// Deklarerer var til router
const postRouter = express.Router()

// Deklarerer klasse instans
const song = new songController()


// Route med GET method - henter
postRouter.get('/', (req, res) => {
    // Get parametre hentes på request objektets query property
    // console.log(req.body);

    // res.send('Hent alle poster');
    // console.log(song.list());

    return song.list(req, res)
})



// Route med GET method - henter detaljer
postRouter.get('//:id([0-9]*)', (req, res) => {
	// console.log(song.details());
    // console.log(req.params.id);

    return song.details(req, res)
})



// Route med POST method - opretter
postRouter.post('/', (req, res) => {
    // res.send('Opretter alle poster');
    // console.log(song.create());

    return song.create(req, res)
})



// Route med PUT method - opdaterer
postRouter.put('/', (req, res) => {
    res.send('Opdatere alle poster');
    console.log(song.update());
})


postRouter.delete('/', (req, res) => {
    res.send('Sletter alle poster');
    console.log(song.delete());
})

export { postRouter }
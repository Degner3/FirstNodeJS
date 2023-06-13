
// Importerer dependencies
import express from 'express'


// Deklarerer var til router
const productsRouter = express.Router()



productsRouter.get('/products', (req, res) => {
    res.send('Hent alle poster');
})

productsRouter.post('/products', (req, res) => {
    res.send('Opretter alle poster');
})

productsRouter.put('/products', (req, res) => {
    res.send('Opdatere alle poster');
})

productsRouter.delete('/products', (req, res) => {
    res.send('Sletter alle poster');
})


export { productsRouter }
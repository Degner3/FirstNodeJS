
import express from 'express'

const aboutRouter = express.Router()


aboutRouter.get('/about', (req, res) => {
    // console.log(req.query.sortkey);
    res.send('Hent alle poster');
})

aboutRouter.post('/about', (req, res) => {
    // console.log(`${req.body.firstname} ${req.body.lastname}`);
    // Henter form body data på res objektet og "sender" (udskriver) til browser
	// Du kan logge req.body og se alle forespørgelsens form data
    // res.send('Opretter alle poster');
    res.send(`
		${req.body.firstname} ${req.body.lastname}
		${req.body.email}
		${req.body.birthday}
        ${req.body.password}
        ${req.body.position}
        ${req.body.adresse}

	`)
})

aboutRouter.put('/about', (req, res) => {
    res.send('Opdatere alle poster');
})

aboutRouter.delete('/about', (req, res) => {
    res.send('Sletter alle poster');
})

export { aboutRouter }
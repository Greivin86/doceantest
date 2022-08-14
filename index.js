import express from 'express'
const app = express()

const home = (req, res) => {
	res.render('home')
}

app.get('/', home)

app.listen(8080)
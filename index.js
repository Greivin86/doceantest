import express from 'express'
const app = express()
const port = process.env.PORT || 3000
const home = (req, res) => {
	res.render('home')
}

app.get('/', home)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
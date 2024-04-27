import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle<h1> Hi')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
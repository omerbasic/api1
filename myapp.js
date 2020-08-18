const express = require('express')
const bodyParser = require('body-parser')

// Init express and set port
const app = express()
const port = 3000
const todos = ['vattna blommorna', 'essa bjuder på lunch']

app.use('/api', bodyParser.json())

// Define our routes
app.use(express.static('public'))
app.get('/api/todos', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(todos)
})
app.post('/api/todos', (req, res) => {
    todos.push(req.body.todo)
    res.send()
})

// TODO: handle delete requests

// Start server
app.listen(port, () => console.log('Server is running at port ' + port))

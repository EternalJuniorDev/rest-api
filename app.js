const express = require('express')
const path = require('path')
const app = express();

const CONTACTS = [];


app.use(express.static(path.resolve(__dirname, 'clients')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'clients', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
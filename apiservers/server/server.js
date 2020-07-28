const express = require('express');
const app = express();
const {pool} = require('./mysql');
const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.send(`<h1>Home Page!</h1>`));

app.get('/Api/servers', (req, res) => {
    res.send('servers list');
  })

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))
const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.send(`
  <h1 style="margin: 2rem auto; text-align: center">
    Hello from Docker-compose this is a nodejs app, the nodejs version is: ${process.version} !!
  </h1>
  `)
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`)
})


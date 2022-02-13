const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.send(`Hello from Docker-compose this is a nodejs app, the nodejs version is: ${process.version} !!`)
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`)
})


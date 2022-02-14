const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.get('/', (req, res) => {
  res.send("PAGE /")
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`)
})


const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
var db = require('./db');

//Router
var router = require('./routes.js')


app.use(express.static('client/dist'));
app.use(express.json())

app.use('/api', router)



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = 3001

app.use('/', htmlRoutes)



app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))

const express = require('express');
const routes = require('./client/src/routes');
const db = require('./client/src/db');
const bodyParser = require('body-parser');
const cors = require('cors')

// app.use(express.static(`${__dirname}/client/build`))

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
//    })

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use('/', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

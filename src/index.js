// Imports
const express = require('express');
const app = express();
const routes = require('./routes')

require('./config/dbConfig');

app.use(express.json());
app.use(routes);

app.listen(3333)
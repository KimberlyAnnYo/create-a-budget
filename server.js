const { urlencoded } = require('body-parser');
const express = require ('express');
const mongoose = require ('mongoose')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(require('./develop/routes/api'));
app.use(express.static('./develop/public'));

 mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')

 mongoose.set('debug', true);

const transaction = require("./develop/models/transaction.js")

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
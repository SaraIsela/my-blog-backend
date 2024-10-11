const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mi-blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a mi blog!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

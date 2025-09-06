const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Ecotroca funcionando!');
});

app.use('/api/usuarios', usuarioRoutes);

module.exports = app;
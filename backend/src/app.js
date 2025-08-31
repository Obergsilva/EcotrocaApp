const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarioRoutes');

app.use(express.json());
app.get('/',(req, res) => {
    res.send('API rodando...');

})
app.use(usuariosRoutes);

module.exports = app;
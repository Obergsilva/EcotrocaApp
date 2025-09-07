const express = require('express');
const app = express();
const cors = require('cors');
const usuarioRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/item'); 

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/', (req, res) => {
    res.send('API Ecotroca funcionando!');
});

app.use('/api/users', usuarioRoutes);
app.use('/api/items', itemRoutes);

module.exports = app;
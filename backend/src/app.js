const express = require("express");
const app = express();
const cors = require("cors");
const usuarioRoutes = require("./routes/user");
const itemRoutes = require("./routes/item");
const categoriaRoutes = require("./routes/categoria");
const propostaRoutes = require("./routes/proposta");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("API Ecotroca funcionando!");
});

app.use("/api/users", usuarioRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/propostas", propostaRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;

const express = require("express");
const router = express.Router();
const itemService = require("../models/itemModel");

// GET todos os itens
router.get("/", async (req, res) => {
  const { bairro, categoria, titulo } = req.query;

  let query = {};

  if (bairro) query.bairro = bairro;
  if (categoria) query.categoriaId = categoria;
  if (titulo) query.titulo = titulo;

  const itensFiltrados = await itemService.getAllItems(query);
  res.json(itensFiltrados);
});

// GET item por ID
router.get("/:id", async (req, res) => {
  const item = await itemService.getItemById(parseInt(req.params.id));
  res.json(item);
});

// POST criar item
router.post("/", async (req, res) => {
  const newItem = await itemService.addItem(req.body);
  res.json(newItem);
});

// PUT atualizar item
router.put("/:id", async (req, res) => {
  const updatedItem = await itemService.updateItem(
    parseInt(req.params.id),
    req.body
  );
  res.json(updatedItem);
});

// DELETE item
router.delete("/:id", async (req, res) => {
  await itemService.deleteItem(parseInt(req.params.id));
  res.json({ message: "Item deletado" });
});

module.exports = router;

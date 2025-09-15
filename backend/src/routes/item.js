const express = require("express");
const router = express.Router();
const itemService = require("../models/itemModel");

// GET todos os itens
router.get("/", async (req, res) => {
  const { bairro } = req.query;

  if (bairro) {
    const items = await itemService.getItemsByBairro(bairro);
    return res.json(items);
  }
  const items = await itemService.getAllItems();
  res.json(items);
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

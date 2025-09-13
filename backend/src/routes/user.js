const express = require("express");
const router = express.Router();
const {
  getAllUsersHandler,
  getUserByIdHandler,
  addUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../controllers/userController");
//const authenticate = require("../controllers/authMiddleware");

// Aplica o middleware de autenticação a todas as rotas deste roteador
//router.use(authenticate);

router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.post("/", addUserHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

module.exports = router;

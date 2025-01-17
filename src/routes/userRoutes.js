const express = require("express");

const router = express.Router();

// controllers
const {
  createUser,
  removeUser,
  getAllUsers,
  login,
  logout,
} = require("../controllers/userController");

router.post("/create", createUser);
router.delete("/remove/:id", removeUser);
router.get("/", getAllUsers);
router.post("/login", login);
router.post("/logout", logout);




module.exports = router;